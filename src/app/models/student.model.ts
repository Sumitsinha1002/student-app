export class Student {
    public schoolId: string;
    public fName: string;
    public mName: string;
    public lName: string;
    public motherName: string;
    public fatherName: string;
    public landline: string;
    public mobile: string;
    public whatsappNumber: string;
    public plotNumber: string;
    public area: string;
    public city: string;
    public state: string;
    public pincode: string;
    public country: string

   // Construcor will be called auto whenever we create an instance of a class
   constructor(schoolId: string, fName: string, lName: string, mName: string,
    motherName: string, fatherName: string, landline: string, mobile: string,
    whatsappNumber: string, plotNumber: string, area: string, city: string,
    state: string, pincode: string, country: string) {
    this.schoolId = schoolId;
    this.fName = fName;
    this.mName = mName;
    this.lName = lName;
    this.motherName = motherName;
    this.fatherName = fatherName;
    this.landline = landline;
    this.mobile = mobile;
    this.whatsappNumber = whatsappNumber;
    this.plotNumber = plotNumber;
    this.area = area;
    this.city = city;
    this.state = state;
    this.pincode = pincode;
    this.country = country
   }
 }
 