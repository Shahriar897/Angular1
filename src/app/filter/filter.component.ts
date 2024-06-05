import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  optionSelected:any;
  isHidden= true;
  toggleFilter() {
    if(this.isHidden== true)
      this.isHidden = false;
    else
      this.isHidden = true;
  }
  onSelected(value:string)
  {
    this.optionSelected = value;
  }
  onAddBtn()
  {

    //this.appendDivs.push(this.htmlDiv);
  }
  operatorField : string = "";
  operatorValue: string = "isOperator";
  onOperatorSelected(value:string){
    this.operatorValue = value;

  }
  onFieldSelected(value:string){
    this.operatorField = value;
  }
  searchFilter(e : any)
  {
    let searchText = e.target.value;
    // if(this.operatorField === "name")
    //   {
    //     if(this.operatorValue === "isOperator")
    //       {

    //         for (let i = 0; i < searchText.length; i++) {
    //           this.filterList = this.personList.filter(item => item.name.toLowerCase().startsWith(searchText.substring(0, i + 1).toLowerCase()));
    //         }
    //       }
    //       else if(this.operatorValue === "isNotOperator"){
    //         for (let i = 0; i < searchText.length; i++) {
    //           this.filterList = this.personList.filter(item => !item.name.toLowerCase().startsWith(searchText.substring(0, i + 1).toLowerCase()));

    //         }
    //         if(searchText == "")
    //           {
    //             this.filterList= this.personList;
    //           }
    //       }
    //   }
    // else if(this.operatorField === "fatherName")
    //     {
    //       if(this.operatorValue === "isOperator")
    //         {

    //           for (let i = 0; i < searchText.length; i++) {
    //             this.filterList = this.personList.filter(item => item.fatherName.toLowerCase().startsWith(searchText.substring(0, i + 1).toLowerCase()));
    //           }
    //         }
    //         else if(this.operatorValue === "isNotOperator"){
    //           for (let i = 0; i < searchText.length; i++) {
    //             this.filterList = this.personList.filter(item => !item.fatherName.toLowerCase().startsWith(searchText.substring(0, i + 1).toLowerCase()));

    //           }
    //           if(searchText == "")
    //             {
    //               this.filterList= this.personList;
    //             }
    //         }
    //     }
    // else  if(this.operatorField === "motherName")
    //       {
    //         if(this.operatorValue === "isOperator")
    //           {

    //             for (let i = 0; i < searchText.length; i++) {
    //               this.filterList = this.personList.filter(item => item.motherName.toLowerCase().startsWith(searchText.substring(0, i + 1).toLowerCase()));
    //             }
    //           }
    //           else if(this.operatorValue === "isNotOperator"){
    //             for (let i = 0; i < searchText.length; i++) {
    //               this.filterList = this.personList.filter(item => !item.motherName.toLowerCase().startsWith(searchText.substring(0, i + 1).toLowerCase()));

    //             }
    //             if(searchText == "")
    //               {
    //                 this.filterList= this.personList;
    //               }
    //           }
    //       }
    // else  if(this.operatorField === "address")
    //         {
    //           if(this.operatorValue === "isOperator")
    //             {

    //               for (let i = 0; i < searchText.length; i++) {
    //                 this.filterList = this.personList.filter(item => item.address.toLowerCase().startsWith(searchText.substring(0, i + 1).toLowerCase()));
    //               }
    //             }
    //             else if(this.operatorValue === "isNotOperator"){
    //               for (let i = 0; i < searchText.length; i++) {
    //                 this.filterList = this.personList.filter(item => !item.address.toLowerCase().startsWith(searchText.substring(0, i + 1).toLowerCase()));

    //               }
    //               if(searchText == "")
    //                 {
    //                   this.filterList= this.personList;
    //                 }
    //             }
    //         }
    // else  if(this.operatorField === "phone")
    //           {
    //             if(this.operatorValue === "isOperator")
    //               {

    //                 for (let i = 0; i < searchText.length; i++) {
    //                   this.filterList = this.personList.filter(item => item.phone.toLowerCase().startsWith(searchText.substring(0, i + 1).toLowerCase()));
    //                 }
    //               }
    //               else if(this.operatorValue === "isNotOperator"){
    //                 for (let i = 0; i < searchText.length; i++) {
    //                   this.filterList = this.personList.filter(item => !item.phone.toLowerCase().startsWith(searchText.substring(0, i + 1).toLowerCase()));

    //                 }
    //                 if(searchText == "")
    //                   {
    //                     this.filterList= this.personList;
    //                   }
    //               }
    //           }
    //   else  if(this.operatorField === "email")
    //             {
    //               if(this.operatorValue === "isOperator")
    //                 {

    //                   for (let i = 0; i < searchText.length; i++) {
    //                     this.filterList = this.personList.filter(item => item.email.toLowerCase().startsWith(searchText.substring(0, i + 1).toLowerCase()));
    //                   }
    //                 }
    //                 else if(this.operatorValue === "isNotOperator"){
    //                   for (let i = 0; i < searchText.length; i++) {
    //                     this.filterList = this.personList.filter(item => !item.email.toLowerCase().startsWith(searchText.substring(0, i + 1).toLowerCase()));

    //                   }
    //                   if(searchText == "")
    //                     {
    //                       this.filterList= this.personList;
    //                     }
    //                 }
    //             }
  }
}
