import { Component, OnInit } from '@angular/core';

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
      name: 'Maha Inw',
      birthdate: '11-11-1990',
      age: '35',
      gender: 'ชาย',
      SavedDate: '12-03-2025',
      SavedBy: 'Name',
    },
    {
      id: '2',
      name: 'Maha InwV2',
      birthdate: '11-11-1990',
      age: '35',
      gender: 'ชาย',
      SavedDate: '1-03-2025',
      SavedBy: 'Name',
    },
    {
      id: '3',
      name: 'Maha InwV3',
      birthdate: '11-11-1990',
      age: '35',
      gender: 'ชาย',
      SavedDate: '12-03-2025',
      SavedBy: 'Name',
    },
    {
      id: '4',
      name: 'Maha InwV4',
      birthdate: '11-11-1990',
      age: '35',
      gender: 'ชาย',
      SavedDate: '11-12-2025',
      SavedBy: 'Name',
    },
    {
      id: '5',
      name: 'Maha InwV5',
      birthdate: '11-11-1990',
      age: '35',
      gender: 'ชาย',
      SavedDate: '12-11-1952',
      SavedBy: 'Name',
    },
    {
      id: '6',
      name: 'Maha InwV6',
      birthdate: '11-11-1990',
      age: '35',
      gender: 'ชาย',
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
      this.age &&
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
    } else {
      alert('กรุณากรอกข้อมูลให้ครบ');
    }
  }
  deleteIndex: number | null = null;

  setDeleteIndex(index: number) {
    this.deleteIndex = index;
  }

  deleteData() {
    if (this.deleteIndex !== null) {
      this.datalist.splice(this.deleteIndex, 1);
      this.deleteIndex = null;
      this.clearForm();

    }
  }
  editIndex: number | null = null;
  setEditData(index: number) {
    const data = this.datalist[index];
    const [fname, lname] = data.name.split(' ');

    this.name = fname;
    this.surname = lname;
    this.birthdate = data.birthdate;
    this.age = data.age;
    this.gender = data.gender;

    this.editIndex = index;
  }

  updateData() {
    if (this.editIndex !== null) {
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

      this.editIndex = null; 
      this.clearForm();
    }
  }
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
    let age = today.getFullYear() - selectedDate.getFullYear();
    const monthDiff = today.getMonth() - selectedDate.getMonth();
    const dayDiff = today.getDate() - selectedDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }

    this.age = age;
  }
}
