export class FileOperations {
    SaveFile(fileName: string, content: string): void {
        if(fileName == '' || !content) return;

        let blob = new Blob([content], { type: 'text/plain' });
        let url = URL.createObjectURL(blob);
        let anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = fileName;

        document.body.appendChild(anchor);
        anchor.click();

        setTimeout(function() {
            document.body.removeChild(anchor);
            window.URL.revokeObjectURL(url);
        });
    }
}