//1
// let strinput=""
// strinput=prompt("nhap chuoi de dao nguoc:")
// let newstr=""
// console.log(strinput.length)
// for(let i=strinput.length-1;i>=0;i--){
//     newstr+=strinput[i]
// }
// console.log(strinput)
// console.log(newstr)


//2
// let strinput=prompt("nhap chuoi ki tu:")
// let newstr=[]
//  newstr=strinput.split(" ")
// for(i=0;i<newstr.length;i++){  
//  newstr[i]= newstr[i].charAt(0).toUpperCase() + newstr[i].substring(1)

// }

// alert(newstr.join(' '))

//3
// let arr=[]
// let str=prompt("nhap vao chuoi so cach nhau khoang trang:")
// arr=str.split(" ")
// console.log(arr)
// let newarr=[]
// for(i=0;i<arr.length;i++){
//     if(newarr.indexOf(arr[i])===-1){
//         newarr.push(arr[i])
//     }
// }
// alert("chuoi cac so khong trung nhau se la:\n "+ newarr)

//4

let staff=[
    {
        ten:"Quang",
        tuoi:"20",
        luong:"10000",
        chuc:"Trợ giảng",
    },
    {
        ten:"Hieu",
        tuoi:"25",
        luong:"15000",
        chuc:"Giảng viên",
    },
    {
        ten:"Phi",
        tuoi:"21",
        luong:"8000",
        chuc:"Điều hành lớp học",
    }
]
let staffs=[]
let newstaff={}
let count=0

while(true){ 
    for(i=0;i<staff.length;i++){
        if(staffs.indexOf(staff[i].ten)==-1){ 
        staffs.push(staff[i].ten)
        }
    }    
let step1=prompt("Trinh quan ly nhan vien MindX:\n ban muon lam gi?\n 1.Read \n 2.Create \n 3.Update \n 4.Delete \n 5.Cancel")

if(step1==1){
    for(i=0;i<staff.length;i++){
        console.log(staff[i])
        
    }
    count++
}
else if(step1==2){
    let step1_2=prompt("phan nay de them nhan vien\n nhap nhan vien moi theo ten,tuoi,muc luong,chuc vu theo thu tu, cach nhau bang dau phay (,)")
    let step1_2a=step1_2.split(",")
    newstaff.ten=step1_2a[0]
    newstaff.tuoi=step1_2a[1]
    newstaff.luong=step1_2a[2]
    newstaff.chuc=step1_2a[3]
    staff.push(newstaff)
    console.log(staff)
count++
}
else if(step1==3){
    
    let step1_3=prompt("ban muon cap nhat thong tin nhan vien nao duoi day\n"+staffs +"\n nhap vao so thu tu cua nhan vien muon cap nhat: ")
    let step1_3a=prompt("ban muon cap nhat lai phan nao?\n 1. ten\n 2. tuoi\n 3. muc luong\n 4.chuc vu")
    let step1_3b=prompt("nhap thong tin thay doi vao: ")
    if(step1_3a==1){ 
        staff[step1_3-1].ten=step1_3b
    }
    else if(step1_3a==2){
        staff[step1_3-1].tuoi=step1_3b
    }
    else if(step1_3a==3){
        staff[step1_3-1].luong=step1_3b
    }
    else {
        staff[step1_3-1].chuc=step1_3b
    }count++
}
else if(step1==4){
    let step1_4=Number(prompt("ban muon xoa nhan vien nao duoi day: \n"+ staffs))
    staff.splice([step1_4-1],1)
    staffs.splice([step1_4-1],1)
    console.log(staff)
    console.log(staffs)
    count++
} 
else if(step1==5){ 
    break
} 
}


//5

// let input=prompt("nhap vao ngay thang nam cach nhau bang dau'/': ")
// let ninput=input.split("/")
// let d=parseInt(ninput[0])
// let m=parseInt(ninput[1])
// let y=parseInt(ninput[2])
// console.log(d)
// let oddmonth=[1,3,5,7,8,10,12]
// let evenmonth=[4,6,9,11]
// console.log(ninput)
// let count=0
 
// if(y%4==0){
//     if(oddmonth.indexOf(m)===-1){
//         if(evenmonth.indexOf(m)===-1){
//             if(d>0 && d<30){
//                 console.log(input+" là ngày hợp lệ")
//                 if((d+1)==30){
//                     console.log("Ngay tiep theo la: "+ "1/"+(m+1)+"/"+y)
//                 }
//                 else{
//                     console.log("Ngay tiep theo la: "+ (d+1)+"/"+m+"/"+y)
//                 }
//             }
//             else{
//                 console.log(input+" là ngày không hợp lệ")
//             }
//         }
//         else if(ninput[0]>0 && ninput[0]<31){
//             console.log(input+" là ngày hợp lệ")
//             if(d+1==31){
//                 console.log("Ngay tiep theo la: "+ 1+"/"+(m+1)+"/"+y)
//             }
//             else{
//                 console.log("Ngay tiep theo la: "+ (d+1)+"/"+m+"/"+y)
//             }
//         }
//         else{
//             console.log(input+" là ngày không hợp lệ")
//         }
//     }
//     else if(oddmonth.indexOf(m)!=-1){  
//     if(d>0 && d<32){
//         console.log(input+" là ngày hợp lệ")
//         if(d+1==32){
//             if(m==12){
//                 console.log("Ngay tiep theo la: "+1+"/"+1+"/"+(y+1))
//             }
//             else{
//                 console.log("Ngay tiep theo la: "+ 1+"/"+(m+1)+"/"+y)    
//             } 
//         }
//         else{
//             console.log("Ngay tiep theo la: "+ (d+1)+"/"+m+"/"+y)
//         }
//     }
//     else{
//         console.log(input+" là ngày không hợp lệ")
//     }
//     }
// }
// else {
//     if(oddmonth.indexOf(m)===-1){
//         if(evenmonth.indexOf(m)===-1){
//             if(d>0 && d<29){
//                 console.log(input+" là ngày hợp lệ")
//                 if(d+1==29){
//                     console.log("Ngay tiep theo la: "+ 1+"/"+(m+1)+"/"+y)
//                 }
//                 else{
//                     console.log("Ngay tiep theo la: "+ (d+1)+"/"+m+"/"+y)
//                 }
//             }
//             else{
//                 console.log(input+" là ngày không hợp lệ")
//             }
//         }
//         else if(d>0 && d<31){
//             console.log(input+" là ngày hợp lệ")
//             if(d+1==31){
//                 console.log("Ngay tiep theo la: "+ 1+"/"+(m+1)+"/"+y)
//             }
//             else{
//                 console.log("Ngay tiep theo la: "+ (d+1)+"/"+m+"/"+y)
//             }
//         }
//         else{
//             console.log(input+" là ngày không hợp lệ")
//         }
//     }
//     else if(d>0 && d<32){
//         console.log(input+" là ngày hợp lệ")
//         if(d+1==32){
//             if(m==12){
//                 console.log("Ngay tiep theo la: "+1+"/"+1+"/"+(y+1))
//             }
//             else{
//                 console.log("Ngay tiep theo la: "+ 1+"/"+(m+1)+"/"+y)    
//             } 
//         }
//         else{
//             console.log("Ngay tiep theo la: "+ (d+1)+"/"+m+"/"+y)
//         }
//     }
//     else{
//         console.log(input+" là ngày không hợp lệ")
//     }
// }
