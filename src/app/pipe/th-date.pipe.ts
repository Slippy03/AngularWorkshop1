import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'thDate'
})
export class ThDatePipe implements PipeTransform {

  transform(value:any, showTime: boolean = false): string {
    if (!value) return '';

    const date = new Date(value);

    const days = [
      'วันอาทิตย์', 'วันจันทร์', 'วันอังคาร', 'วันพุธ',
      'วันพฤหัสบดี', 'วันศุกร์', 'วันเสาร์'
    ];

    const months = [
      'มกราคม', 'กุมภาพันธ์', 'มีนาคม', 'เมษายน',
      'พฤษภาคม', 'มิถุนายน', 'กรกฎาคม', 'สิงหาคม',
      'กันยายน', 'ตุลาคม', 'พฤศจิกายน', 'ธันวาคม'
    ];

    const dayName = days[date.getDay()];
    const day = date.getDate();
    const monthName = months[date.getMonth()];
    const year = date.getFullYear() + 543;

    if (showTime) {
      const hour = this.padZero(date.getHours());
      const minute = this.padZero(date.getMinutes());
      const second = this.padZero(date.getSeconds());
      return `${dayName}ที่ ${day} ${monthName} ${year} เวลา ${hour}:${minute}:${second} น.`;
    } else {
      return `${dayName}ที่ ${day} ${monthName} ${year}`;
    }
  }

  private padZero(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}
