import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  date1: any;
  constructor() {}
  name: string = '';
  surname: string = '';
  birthdate: Date | null = null;
  age: number | null = null;
  gender: string = '';

  datalist: any = [
    {
      id: '1',
      name: 'John Doe',
      birthdate: '11-11-1990',
      age: '35',
      gender: 'ชาย',
      SavedDate: '12-03-2025',
      SavedBy: 'Name',
    },
    {
      id: '2',
      name: 'Jane Doe',
      birthdate: '11-11-1990',
      age: '35',
      gender: 'หญิง',
      SavedDate: '1-03-2025',
      SavedBy: 'Name',
    },
    {
      id: '3',
      name: 'กล้า พิชิตพล',
      birthdate: '11-11-1990',
      age: '35',
      gender: 'ชาย',
      SavedDate: '12-03-2025',
      SavedBy: 'Name',
    },
    {
      id: '4',
      name: 'เต๋า ภัทรพล',
      birthdate: '11-11-1990',
      age: '35',
      gender: 'ชาย',
      SavedDate: '11-12-2025',
      SavedBy: 'Name',
    },
    {
      id: '5',
      name: 'เด็ก ชาย',
      birthdate: '11-11-1990',
      age: '35',
      gender: 'ชาย',
      SavedDate: '12-11-1952',
      SavedBy: 'Name',
    },
    {
      id: '6',
      name: 'เด็ก หญิง',
      birthdate: '11-11-2015',
      age: '10',
      gender: 'หญิง',
      SavedDate: '11-11-1990',
      SavedBy: 'Name',
    },
  ];
  ngOnInit(): void {}
  nextId = 7;

  addData() {
    if (
      this.name &&
      this.surname &&
      this.birthdate &&
      this.age !== null &&
      this.age !== undefined &&
      this.gender
    ) {
      this.datalist.push({
        id: this.nextId,
        name: this.name + ' ' + this.surname,
        birthdate: this.birthdate,
        age: this.age,
        gender: this.gender,
        SavedDate: new Date().toLocaleDateString('en', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        }),
        SavedBy: 'T',
      });
      this.nextId++;

      this.name = '';
      this.surname = '';
      this.birthdate = null;
      this.age = null;
      this.gender = '';
      this.datalist = [...this.datalist];
      Swal.fire({
        icon: 'success',
        title: 'บันทึกข้อมูลสำเร็จ',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'กรุณากรอกข้อมูลให้ครบ',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }

  //delete
  deleteIndex: number | null = null;
  setDeleteIndex(index: number) {
    this.deleteIndex = index;
  }
  deleteData() {
    if (this.deleteIndex !== null) {
      this.datalist.splice(this.deleteIndex, 1);
      this.datalist = [...this.datalist];
      this.deleteIndex = null;
      this.clearForm();
      Swal.fire({
        icon: 'success',
        title: 'ลบข้อมูลสำเร็จ',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }
  //editForm
  editIndex: number | null = null;
  setEditData(index: number) {
    this.editIndex = index;
    const item = this.datalist[index];
    this.name = item.name.split(' ')[0];
    this.surname = item.name.split(' ')[1];
    this.birthdate = new Date(item.birthdate);
    this.age = item.age;
    this.gender = item.gender;
  }
//updatefromForm
  updateData() {
    if (this.editIndex === null) return;

    if (
      !this.name?.trim() ||
      !this.surname?.trim() ||
      !this.birthdate ||
      this.age === null ||
      this.age === undefined ||
      !this.gender
    ) {
      Swal.fire({
        icon: 'error',
        title: 'กรุณากรอกข้อมูลให้ครบก่อนแก้ไข',
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2000,
        

      })
      this.clearForm();;
      return;
    }

    this.datalist[this.editIndex] = {
      ...this.datalist[this.editIndex],

      name: this.name + ' ' + this.surname,
      birthdate: this.birthdate,
      age: this.age,
      gender: this.gender,
      SavedDate: new Date().toLocaleDateString('en', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      }),
      SavedBy: 'T',
    };

    Swal.fire({
      icon: 'success',
      title: 'แก้ไขข้อมูลสำเร็จ',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
    });

    this.datalist = [...this.datalist];
    this.editIndex = null;
    this.clearForm();
  }

  //clear Form
  clearForm() {
    this.name = '';
    this.surname = '';
    this.birthdate = null;
    this.age = null;
    this.gender = '';
  }

  calculateAge(selectedDate: Date): void {
    if (!selectedDate) return;

    const today = new Date();

    if (selectedDate > today) {
      this.age = null;
      Swal.fire({
        icon: 'warning',
        title: 'วันที่เกิดไม่ถูกต้อง',
        text: 'วันเกิดต้องไม่มากกว่าวันปัจจุบัน',
        toast: false,
        position: 'center',
        showConfirmButton: true,
       
      });

      return;
    }

    let age = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();
    const dayDiff = today.getDate() - selectedDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    this.age = age;
  }
}
