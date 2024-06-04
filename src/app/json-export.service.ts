import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonExportService {

  constructor() { }

  exportJson(data: any, filename: string) {
    const jsonStr = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = `${filename}.json`;
    a.click();

    window.URL.revokeObjectURL(url);
  }
}
