const fs = require('fs');

const dirPath = '../../test_folder/';

fs.readdir(dirPath, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach((file) => {
        const oldPath = `${dirPath}${file}`;
        const newPath = `${dirPath}${file}-newName`;

        fs.rename(oldPath, newPath, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`${oldPath} renamed to ${newPath}`);
            }
        });
    });
});
