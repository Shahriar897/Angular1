import { Component } from '@angular/core';
import {CommonModule} from "@angular/common"
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-table',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './home-table.component.html',
  styleUrl: './home-table.component.css'
})

export class HomeTableComponent {

  ngOnInit(){
    this.searchPersonList='jjgjg'
  }
  searchText ="";

  personList = [{"id":1,"name":"Aaren Boesenberg","fatherName":"Aleksander Boedeker","motherName":"Ailin Boler","address":"Jurdab (Bahrain)","phone":"+8809518866544","email":"Aaren Boesenberg@yahoo.com"},
  {"id":2,"name":"Alexander Bogenschneide","fatherName":"Aditya Bondoc","motherName":"Alber Boekhout","address":"Kazipur (Bangladesh)","phone":"+8803892852162","email":"Alexander Bogenschneide@gmail.com"},
  {"id":3,"name":"Alber Boehler","fatherName":"AJ Bonaccorso","motherName":"Aden Boleware","address":"Kabi (Bangladesh)","phone":"+8804365667417","email":"Alber Boehler@yahoo.com"},
  {"id":4,"name":"Abubakar Boesen","fatherName":"Allan Bodziony","motherName":"Alfie Boffa","address":"Jessore (Bangladesh)","phone":"+8802021861811","email":"Abubakar Boesen@datasoft.com"},
  {"id":5,"name":"Abdulkhader Boever","fatherName":"Afonso Bondy","motherName":"Adam Bogaert","address":"Bruce Vale (Barbados)","phone":"+8800503466442","email":"Abdulkhader Boever@edu.com"},
  {"id":6,"name":"Alphonse Boldizsar","fatherName":"Abdulkarem Bogdanovich","motherName":"Al Boele","address":"Hastings (Barbados)","phone":"+8802365550280","email":"Alphonse Boldizsar@yahoo.com"},
  {"id":7,"name":"Abdulkhader Bonde","fatherName":"Alber Bonebrake","motherName":"Ahmad Boehler","address":"Oil City (Bahrain)","phone":"+8805957055020","email":"Abdulkhader Bonde@edu.com"},
  {"id":8,"name":"Ahmed Bonnel","fatherName":"Ally Bomia","motherName":"Alf Bollman","address":"Hossain (Bangladesh)","phone":"+8808883685644","email":"Ahmed Bonnel@edu.com"},
  {"id":9,"name":"Addison Bogda","fatherName":"Aedyn Boillot","motherName":"Alber Boeser","address":"Kazipur (Bangladesh)","phone":"+8801568688255","email":"Addison Bogda@yahoo.com"},
  {"id":10,"name":"Ahmed-Aziz Bohnen","fatherName":"Abdul-Rehman Bohrer","motherName":"Abdulkhader Bollbach","address":"Dhaka (Bangladesh)","phone":"+8801087875033","email":"Ahmed-Aziz Bohnen@yahoo.com"},
  {"id":11,"name":"Abdul-Aziz Bogan","fatherName":"Aleksandar Boldt","motherName":"Alvern Bohanon","address":"Bangladesh","phone":"+8800309929645","email":"Abdul-Aziz Bogan@datasoft.com"},
  {"id":12,"name":"Ainslie Bonetto","fatherName":"Ahtasham Bologna","motherName":"Aedin Bokor","address":"Sanad (Bahrain)","phone":"+8800255418331","email":"Ainslie Bonetto@edu.com"},
  {"id":13,"name":"Aditya Boillot","fatherName":"Adenn Boldon","motherName":"Aidian Boltz","address":"Bazar (Bangladesh)","phone":"+8807253607188","email":"Aditya Boillot@edu.com"},
  {"id":14,"name":"Abdullah Bolten","fatherName":"Albert Bollozos","motherName":"Aayan Bolus","address":"Barisal (Bangladesh)","phone":"+8802054882118","email":"Abdullah Bolten@datasoft.com"},
  {"id":15,"name":"Adam-James Boey","fatherName":"Aaran Bolar","motherName":"Aaran Boes","address":"Bangladesh","phone":"+8806436923163","email":"Adam-James Boey@datasoft.com"},
  {"id":16,"name":"Ahmed Bongio","fatherName":"Ahmed Boldin","motherName":"Aaran Boehne","address":"Comilla (Bangladesh)","phone":"+8805819142914","email":"Ahmed Bongio@edu.com"},
  {"id":17,"name":"Abu Boerma","fatherName":"Aleksandr Bogus","motherName":"Abdisalam Boning","address":"Tejgaon (Bangladesh)","phone":"+8803755015958","email":"Abu Boerma@yahoo.com"},
  {"id":18,"name":"Abdurraheem Bolognese","fatherName":"Aaryn Bohmker","motherName":"Abhinav Boisclair","address":"Delta (Bangladesh)","phone":"+8801629378610","email":"Abdurraheem Bolognese@gmail.com"},
  {"id":19,"name":"Abir Boisclair","fatherName":"Adil Bohs","motherName":"Ajay Bondura","address":"Tejgaon (Bangladesh)","phone":"+8805116173300","email":"Abir Boisclair@gmail.com"},
  {"id":20,"name":"Ahmed Bohlsen","fatherName":"Adil Bohnert","motherName":"Ainslie Bolte","address":"Hastings (Barbados)","phone":"+8807336431854","email":"Ahmed Bohlsen@gmail.com"},
  {"id":21,"name":"Adrien Bolek","fatherName":"Aedan Bolls","motherName":"Alfee Bollen","address":"Comilla (Bangladesh)","phone":"+8802400212581","email":"Adrien Bolek@gmail.com"},
  {"id":22,"name":"Aleksandr Bodor","fatherName":"Ahmed-Aziz Bonetto","motherName":"Alisdair Boehl","address":"Bangla (Bangladesh)","phone":"+8804777767547","email":"Aleksandr Bodor@gmail.com"},
  {"id":23,"name":"Alekzander Bohlen","fatherName":"Alhaji Bonefield","motherName":"Abhinav Bollard","address":"Bangla (Bangladesh)","phone":"+8804860313625","email":"Alekzander Bohlen@edu.com"},
  {"id":24,"name":"Abel Bondurant","fatherName":"Ainsley Boilard","motherName":"Aedin Bongiardina","address":"Bazar (Bangladesh)","phone":"+8803928099060","email":"Abel Bondurant@gmail.com"},
  {"id":25,"name":"Aarron Boden","fatherName":"Aditya Boiles","motherName":"Alum Bonds","address":"Atlantic Shores (Barbados)","phone":"+8807003817483","email":"Aarron Boden@datasoft.com"},
  {"id":26,"name":"A-Jay Bonano","fatherName":"Abdul-Aziz Bolyard","motherName":"Al-Hassan Bodamer","address":"Agrabad (Bangladesh)","phone":"+8802836866758","email":"A-Jay Bonano@gmail.com"},
  {"id":27,"name":"Aliyaan Bonadurer","fatherName":"Airen Bolla","motherName":"Alphonse Bomer","address":"Tejgaon (Bangladesh)","phone":"+8803900317265","email":"Aliyaan Bonadurer@edu.com"},
  {"id":28,"name":"Alexander Bonifer","fatherName":"Allesandro Bolender","motherName":"Aaran Boeve","address":"Bangla (Bangladesh)","phone":"+8803587069414","email":"Alexander Bonifer@datasoft.com"},
  {"id":29,"name":"Airen Bonsignore","fatherName":"Alber Bondanza","motherName":"Alfee Bodensteiner","address":"Atlantic Shores (Barbados)","phone":"+8807847000888","email":"Airen Bonsignore@gmail.com"},
  {"id":30,"name":"Albie Bogen","fatherName":"Abhinav Bongiardina","motherName":"Alec Boelter","address":"Dhaka (Bangladesh)","phone":"+8809364836554","email":"Albie Bogen@edu.com"},
  {"id":31,"name":"Aleem Boehler","fatherName":"Alec Bolick","motherName":"Afonso Bolick","address":"Jurdab (Bahrain)","phone":"+8801738802563","email":"Aleem Boehler@edu.com"},
  {"id":32,"name":"Aleksandrs Bonham","fatherName":"Ally Bonomini","motherName":"Abdurraheem Boeving","address":"Bagatelle (Barbados)","phone":"+8802840892883","email":"Aleksandrs Bonham@edu.com"},
  {"id":33,"name":"Aarman Bonefield","fatherName":"Abhinav Boeri","motherName":"Abhisumant Boehner","address":"Manama (Bahrain)","phone":"+8800809579949","email":"Aarman Bonefield@edu.com"},
  {"id":34,"name":"Alistair Bohanon","fatherName":"Abdalroof Bodnar","motherName":"Alessandro Bohr","address":"Barbados","phone":"+8807657784656","email":"Alistair Bohanon@gmail.com"},
  {"id":35,"name":"Alec Bohon","fatherName":"Addisson Bokor","motherName":"Adam Bolin","address":"Narayanganj (Bangladesh)","phone":"+8809900115549","email":"Alec Bohon@gmail.com"},
  {"id":36,"name":"Aaran Bonfiglio","fatherName":"Ainslie Bodway","motherName":"Adnan Bongartz","address":"Oil City (Bahrain)","phone":"+8800060728176","email":"Aaran Bonfiglio@edu.com"},
  {"id":37,"name":"Aleksandr Boggan","fatherName":"Aaryn Boisjolie","motherName":"Abdur-Rahman Bogust","address":"Comilla (Bangladesh)","phone":"+8803354703991","email":"Aleksandr Boggan@edu.com"},
  {"id":38,"name":"Allesandro Bohrer","fatherName":"Alvern Boning","motherName":"Abdul-Aziz Bohlander","address":"Bangladesh","phone":"+8803491247842","email":"Allesandro Bohrer@yahoo.com"},
  {"id":39,"name":"Ajayraj Boever","fatherName":"Addisson Bompane","motherName":"Abdulkarem Bollom","address":"Tubli (Bahrain)","phone":"+8800117709494","email":"Ajayraj Boever@gmail.com"},
  {"id":40,"name":"Adil Bogatitus","fatherName":"Aarman Boken","motherName":"Abdurraheem Boenisch","address":"Madinat Isa (Bahrain)","phone":"+8802183359626","email":"Adil Bogatitus@edu.com"},
  {"id":41,"name":"Ahmad Bollacker","fatherName":"Allesandro Bohlander","motherName":"Adegbola Bogdan","address":"Hossain (Bangladesh)","phone":"+8800149696490","email":"Ahmad Bollacker@edu.com"},
  {"id":42,"name":"Alekzander Boltz","fatherName":"Aidy Boenisch","motherName":"Abdurraheem Bonita","address":"Sanad (Bahrain)","phone":"+8802371758480","email":"Alekzander Boltz@datasoft.com"},
  {"id":43,"name":"Alfy Boebinger","fatherName":"Altyiab Boehlke","motherName":"Adie Bojanowski","address":"Sitrah (Bahrain)","phone":"+8801607535766","email":"Alfy Boebinger@datasoft.com"},
  {"id":44,"name":"Abdulkadir Bohonik","fatherName":"Akram Bolek","motherName":"Afonso Bolins","address":"Bruce Vale (Barbados)","phone":"+8804373061184","email":"Abdulkadir Bohonik@yahoo.com"},
  {"id":45,"name":"Aarman Boddy","fatherName":"Adie Boin","motherName":"Abubakar Boise","address":"Kabi (Bangladesh)","phone":"+8809481286313","email":"Aarman Boddy@yahoo.com"},
  {"id":46,"name":"Adnan Bogert","fatherName":"Abdur Boeneke","motherName":"Alishan Bonepart","address":"Bangladesh","phone":"+8805427322194","email":"Adnan Bogert@yahoo.com"},
  {"id":47,"name":"Abu Bonebrake","fatherName":"Alec Boer","motherName":"Alvern Bonfield","address":"Atlantic Shores (Barbados)","phone":"+8807586273653","email":"Abu Bonebrake@edu.com"},
  {"id":48,"name":"Abdur-Rehmaan Bolebruch","fatherName":"Ailin Boling","motherName":"Abbas Bohman","address":"Madinat Isa (Bahrain)","phone":"+8804070741717","email":"Abdur-Rehmaan Bolebruch@datasoft.com"},
  {"id":49,"name":"Aaren Bollie","fatherName":"Albie Bodah","motherName":"Aayan Boedeker","address":"Sanabis (Bahrain)","phone":"+8803546513302","email":"Aaren Bollie@datasoft.com"},
  {"id":50,"name":"Alessandro Bogen","fatherName":"Alec Bonnema","motherName":"Addisson Bogan","address":"Atlantic Shores (Barbados)","phone":"+8802858948936","email":"Alessandro Bogen@edu.com"},
  {"id":51,"name":"Allen Boggi","fatherName":"Alexander Boeson","motherName":"Alphonse Bogdon","address":"Mymensingh (Bangladesh)","phone":"+8806946388276","email":"Allen Boggi@datasoft.com"},
  {"id":52,"name":"Adenn Bogany","fatherName":"Airlie Bomer","motherName":"Aleem Bongle","address":"Dhaka (Bangladesh)","phone":"+8806702853645","email":"Adenn Bogany@edu.com"},
  {"id":53,"name":"Alber Bonawitz","fatherName":"Aarron Bolten","motherName":"Alastair Bocook","address":"Sanabis (Bahrain)","phone":"+8803307531538","email":"Alber Bonawitz@datasoft.com"},
  {"id":54,"name":"Alec Body","fatherName":"Altyiab Boffa","motherName":"Aditya Bonadona","address":"Uttara (Bangladesh)","phone":"+8806677809028","email":"Alec Body@edu.com"},
  {"id":55,"name":"Adil Bonneville","fatherName":"Airen Bonamico","motherName":"Alfie Bolieu","address":"Cave Hill (Barbados)","phone":"+8804044057667","email":"Adil Bonneville@gmail.com"},
  {"id":56,"name":"Akan Boero","fatherName":"Alfred Bohrer","motherName":"Alf Boedeker","address":"Barbar (Bahrain)","phone":"+8801282483165","email":"Akan Boero@datasoft.com"},
  {"id":57,"name":"Aidian Bokanovich","fatherName":"Ahmed Bohol","motherName":"Albie Bonsall","address":"Clapham (Barbados)","phone":"+8802540308249","email":"Aidian Bokanovich@gmail.com"},
  {"id":58,"name":"Allan Body","fatherName":"Al-Hassan Bolch","motherName":"Al-Hassan Bogen","address":"Narayanganj (Bangladesh)","phone":"+8801840019315","email":"Allan Body@gmail.com"},
  {"id":59,"name":"Aditya Bogust","fatherName":"Aiden-Jack Boga","motherName":"Alexander Bodine","address":"Kazipur (Bangladesh)","phone":"+8804496803604","email":"Aditya Bogust@gmail.com"},
  {"id":60,"name":"Allesandro Bonefont","fatherName":"Ahtasham Bonavita","motherName":"Allen Bonetto","address":"Rajshahi (Bangladesh)","phone":"+8808988288853","email":"Allesandro Bonefont@datasoft.com"},
  {"id":61,"name":"Alfred Bolstad","fatherName":"Ajayraj Bonson","motherName":"Alistar Boggan","address":"Madinat Hamad (Bahrain)","phone":"+8800616511696","email":"Alfred Bolstad@datasoft.com"},
  {"id":62,"name":"Aidian Bolls","fatherName":"AJ Bohlman","motherName":"Aaryan Bommer","address":"Manama (Bahrain)","phone":"+8804817069873","email":"Aidian Bolls@yahoo.com"},
  {"id":63,"name":"Afonso Bohorquez","fatherName":"Ace Bognuda","motherName":"Adegbolahan Boisclair","address":"Barbar (Bahrain)","phone":"+8803673365255","email":"Afonso Bohorquez@gmail.com"},
  {"id":64,"name":"Alexei Bolz","fatherName":"Aden Bohonik","motherName":"Adnan Boehnke","address":"Bangla (Bangladesh)","phone":"+8807782976698","email":"Alexei Bolz@gmail.com"},
  {"id":65,"name":"Alex Bonacci","fatherName":"Aaryn Bonett","motherName":"Aayan Boelsche","address":"Bagatelle (Barbados)","phone":"+8803024348725","email":"Alex Bonacci@yahoo.com"},
  {"id":66,"name":"Adam-James Bonadio","fatherName":"Adegbolahan Bohringer","motherName":"AJ Boggiano","address":"Bazar (Bangladesh)","phone":"+8809969776408","email":"Adam-James Bonadio@gmail.com"},
  {"id":67,"name":"Al-Hassan Bohs","fatherName":"Adrian Boie","motherName":"Alekzander Boger","address":"Barbados","phone":"+8803425406946","email":"Al-Hassan Bohs@datasoft.com"},{"id":68,"name":"Aarron Bonsell","fatherName":"Abaan Boers","motherName":"Aliekber Bolin","address":"Jurdab (Bahrain)","phone":"+8806438597136","email":"Aarron Bonsell@gmail.com"},
  {"id":69,"name":"Abbas Boettner","fatherName":"Alexei Bonapart","motherName":"Abdul Boesiger","address":"Sitrah (Bahrain)","phone":"+8806893175835","email":"Abbas Boettner@datasoft.com"},
  {"id":70,"name":"Alastair Bogus","fatherName":"Aiadan Bombich","motherName":"Alber Bolding","address":"Jurdab (Bahrain)","phone":"+8806095011835","email":"Alastair Bogus@yahoo.com"},{"id":71,"name":"Ajayraj Bogner","fatherName":"Alf Boiser","motherName":"Abdisalam Bodle","address":"Sitrah (Bahrain)","phone":"+8801520325730","email":"Ajayraj Bogner@gmail.com"},
  {"id":72,"name":"Ajayraj Bongers","fatherName":"Allan Bonneau","motherName":"AJ Boele","address":"Bazar (Bangladesh)","phone":"+8806698687022","email":"Ajayraj Bongers@gmail.com"},{"id":73,"name":"Aedyn Bonadona","fatherName":"Abaan Bonfield","motherName":"Aeron Bonneau","address":"Sitrah (Bahrain)","phone":"+8800364968851","email":"Aedyn Bonadona@gmail.com"},
  {"id":74,"name":"Aleem Bolnick","fatherName":"Alistar Boldman","motherName":"Ace Boettger","address":"Barbar (Bahrain)","phone":"+8809128859657","email":"Aleem Bolnick@yahoo.com"},{"id":75,"name":"Aarez Boczar","fatherName":"Aditya Bodovsky","motherName":"Aiadan Bonaparte","address":"Kazipur (Bangladesh)","phone":"+8800866688104","email":"Aarez Boczar@edu.com"},
  {"id":76,"name":"Abdur-Rehmaan Bohlman","fatherName":"Akan Bologna","motherName":"Abdulkhader Boldrin","address":"Madinat Hamad (Bahrain)","phone":"+8800845498744","email":"Abdur-Rehmaan Bohlman@yahoo.com"},{"id":77,"name":"Abdalroof Bonadio","fatherName":"Abdulmalik Bonawitz","motherName":"Abir Bomkamp","address":"Uttara (Bangladesh)","phone":"+8802342401371","email":"Abdalroof Bonadio@datasoft.com"},{"id":78,"name":"Abdur-Rahman Bogden","fatherName":"Allesandro Boeving","motherName":"Akram Bolivar","address":"Cave Hill (Barbados)","phone":"+8800205508404","email":"Abdur-Rahman Bogden@datasoft.com"},{"id":79,"name":"Alessandro Boldon","fatherName":"Aidan Bolinder","motherName":"Alishan Bonomi","address":"Dhaka (Bangladesh)","phone":"+8804368737109","email":"Alessandro Boldon@yahoo.com"},{"id":80,"name":"Alfred Bolig","fatherName":"Allan Bonsall","motherName":"Aliekber Boekhout","address":"Jurdab (Bahrain)","phone":"+8803773751231","email":"Alfred Bolig@datasoft.com"},{"id":81,"name":"Adie Boeser","fatherName":"Abdallah Bolduan","motherName":"Aidy Bollman","address":"Oil City (Bahrain)","phone":"+8802494265264","email":"Adie Boeser@edu.com"},{"id":82,"name":"Abubakar Bonepart","fatherName":"Al-Hassan Boluda","motherName":"Abdallah Bonanni","address":"Rajshahi (Bangladesh)","phone":"+8808664867648","email":"Abubakar Bonepart@datasoft.com"},{"id":83,"name":"Aarez Boddy","fatherName":"A-Jay Bodkin","motherName":"Abdisalam Bohnet","address":"Bangla (Bangladesh)","phone":"+8805414012623","email":"Aarez Boddy@yahoo.com"},{"id":84,"name":"Altyiab Boin","fatherName":"Abdulbasir Bok","motherName":"Albert Bone","address":"Sanad (Bahrain)","phone":"+8803146460600","email":"Altyiab Boin@datasoft.com"},{"id":85,"name":"Albie Boling","fatherName":"Alekzander Bolek","motherName":"Alber Bodrick","address":"Tejgaon (Bangladesh)","phone":"+8803502889005","email":"Albie Boling@datasoft.com"},{"id":86,"name":"Aden Boe","fatherName":"Alasdair Bonomini","motherName":"AJ Boisuert","address":"Jurdab (Bahrain)","phone":"+8807774662774","email":"Aden Boe@yahoo.com"},{"id":87,"name":"Adam-James Bonnette","fatherName":"Abdihakim Bohley","motherName":"Aedan Boman","address":"Comilla (Bangladesh)","phone":"+8804872539837","email":"Adam-James Bonnette@yahoo.com"},{"id":88,"name":"Aiadan Bohren","fatherName":"Alf Boggs","motherName":"Aidian Bogardus","address":"Barbar (Bahrain)","phone":"+8806920492062","email":"Aiadan Bohren@yahoo.com"}];

  filterList:any;


  searchPersonList='';
  searchKey(data: any) {
    this.searchText = data.target.value;

    // this.personList = this.search();

    this.personList = this.personList.filter((element) => {

      return element.name.toLowerCase().includes(this.searchText.toLowerCase());

   })


   this.searchPersonList="";
   console.log(this.searchPersonList);


  }

  search() {

    this.filterList = this.searchText === ""? this.personList : this.personList.filter((element) => {
       return JSON.stringify(element.name).toLowerCase().includes(this.searchText.toLowerCase());
    })
    return this.filterList;
  }

  isShow = true;
  toggleFilter()
  {
    this.isShow = false;
  }
}

