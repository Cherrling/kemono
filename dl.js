const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const mkdirAsync = promisify(fs.mkdir);
const writeFileAsync = promisify(fs.writeFile);

const inputJSON = JSON.parse(fs.readFileSync('input.json', 'utf8'));

const downloadAndSaveFile = async (url, filePath, proxy) => {
    try {
        const response = await axios({
            method: 'get',
            url,
            responseType: 'stream',
            proxy,
        });
        const writer = fs.createWriteStream(filePath);
        response.data.pipe(writer);
        return new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
        });
    } catch (error) {
        throw error;
    }
};

const downloadDirectory = 'downloads';

const downloadFiles = async (item) => {
    const id = item.id;
    const file = "http://kemono.su" + item.file.path;
    const attachments = item.attachments.map(attachment => "kemono.su" + attachment.path);
    const downloadFolder = path.join(downloadDirectory, id);

    // 创建下载文件夹
    await mkdirAsync(downloadFolder, { recursive: true });

    // 下载文件并保存
    await downloadAndSaveFile(file, path.join(downloadFolder, item.file.name), { http: 'http://127.0.0.1:10809' });

    for (let i = 0; i < attachments.length; i++) {
        await downloadAndSaveFile(attachments[i], path.join(downloadFolder, item.attachments[i].name), { http: 'http://127.0.0.1:10809' });
    }
};

(async () => {
    for (const item of inputJSON) {
        await downloadFiles(item);
    }
})();
