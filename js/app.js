'use strict';

let hours = ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 pm','01:00 pm','02:00 pm','03:00 pm','04:00 pm','05:00 pm','06:00 pm','07:00 pm'];

let seattleCookies = {
    location: 'Seattle',
    min: 23,
    max: 65,
    average:6.3,
    hourSales:[],
    daySales:0,
   randomCustomer :function () {
        let range=seattleCookies.max-seattleCookies.min;
         let randomCounter=Math.random() * range+seattleCookies.min;
         return Math.ceil(randomCounter);
      },
    hourDaySales :function () {
        for (let i=0;i<hours.length;i++){
            let numberOfCookies= Math.ceil(seattleCookies.randomCustomer() *seattleCookies.average);
            seattleCookies.hourSales.push(numberOfCookies);
            seattleCookies.daySales += numberOfCookies;
        }
        },

   render :function(){
       let container=document.getElementById('content-area');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Seattle';
       container.appendChild(h2);
       let list=document.createElement('ul');
       container.appendChild(list);
       for (let i=0;i<hours.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent  =hours[i]+': '+seattleCookies.hourSales[i]+' cookies';
        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+seattleCookies.daySales+' cookies';
        list.appendChild(listItem);
   },
}
   seattleCookies.hourDaySales();
   seattleCookies.render();

//    tokyo

   let tokyoCookies = {
    location: 'tokyo',
    min: 3,
    max: 24,
    average:1.2,
    hourSales:[],
    daySales:0,
   randomCustomer :function () {
        let range=tokyoCookies.max-tokyoCookies.min;
         let randomCounter=Math.random() * range+tokyoCookies.min;
         return Math.ceil(randomCounter);
      },
    hourDaySales :function () {
        for (let i=0;i<hours.length;i++){
            let numberOfCookies= Math.ceil(tokyoCookies.randomCustomer() *tokyoCookies.average);
            tokyoCookies.hourSales.push(numberOfCookies);
            tokyoCookies.daySales += numberOfCookies;
        }
        },
        
   render :function(){
       let container=document.getElementById('content-area');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Tokyo';
       container.appendChild(h2);
       let list=document.createElement('ul');
       container.appendChild(list);
       for (let i=0;i<hours.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent  =hours[i]+': '+tokyoCookies.hourSales[i]+' cookies';
        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+tokyoCookies.daySales+' cookies';
        list.appendChild(listItem);
   },
}
   tokyoCookies.hourDaySales();
   tokyoCookies.render();

   //    Dubai

   let dubaiCookies = {
    location: 'dubai',
    min: 11,
    max: 38,
    average:3.7,
    hourSales:[],
    daySales:0,
   randomCustomer :function () {
        let range=dubaiCookies.max-dubaiCookies.min;
         let randomCounter=Math.random() * range+dubaiCookies.min;
         return Math.ceil(randomCounter);
      },
    hourDaySales :function () {
        for (let i=0;i<hours.length;i++){
            let numberOfCookies= Math.ceil(dubaiCookies.randomCustomer() *dubaiCookies.average);
            dubaiCookies.hourSales.push(numberOfCookies);
            dubaiCookies.daySales += numberOfCookies;
        }
        },
        
   render :function(){
       let container=document.getElementById('content-area');
       let h2 =document.createElement('h2');
       container.appendChild(h2);
       h2.textContent='Dubai';
       container.appendChild(h2);
       let list=document.createElement('ul');
       container.appendChild(list);
       for (let i=0;i<hours.length;i++){
        let listItem = document.createElement('li');
        listItem.textContent  =hours[i]+': '+dubaiCookies.hourSales[i]+' cookies';
        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');
        listItem.textContent  ='Total: '+dubaiCookies.daySales+' cookies';
        list.appendChild(listItem);
   },
}
   dubaiCookies.hourDaySales();
   dubaiCookies.render();

    //    Paris

    let parisCookies = {
        location: 'paris',
        min: 20,
        max: 38,
        average:2.3,
        hourSales:[],
        daySales:0,
       randomCustomer :function () {
            let range=parisCookies.max-parisCookies.min;
             let randomCounter=Math.random() * range+parisCookies.min;
             return Math.ceil(randomCounter);
          },
        hourDaySales :function () {
            for (let i=0;i<hours.length;i++){
                let numberOfCookies= Math.ceil(parisCookies.randomCustomer() *parisCookies.average);
                parisCookies.hourSales.push(numberOfCookies);
                parisCookies.daySales += numberOfCookies;
            }
            },
            
       render :function(){
           let container=document.getElementById('content-area');
           let h2 =document.createElement('h2');
           container.appendChild(h2);
           h2.textContent='Paris';
           container.appendChild(h2);
           let list=document.createElement('ul');
           container.appendChild(list);
           for (let i=0;i<hours.length;i++){
            let listItem = document.createElement('li');
            listItem.textContent  =hours[i]+': '+ parisCookies.hourSales[i]+' cookies';
            list.appendChild(listItem);
           }
           let listItem = document.createElement('li');
            listItem.textContent  ='Total: '+ parisCookies.daySales+' cookies';
            list.appendChild(listItem);
       },
    }
       parisCookies.hourDaySales();
       parisCookies.render();

         //    Lima

    let limaCookies = {
        location: 'lima',
        min: 2,
        max: 16,
        average:4.6,
        hourSales:[],
        daySales:0,
       randomCustomer :function () {
            let range=limaCookies.max-limaCookies.min;
             let randomCounter=Math.random() * range+limaCookies.min;
             return Math.ceil(randomCounter);
          },
        hourDaySales :function () {
            for (let i=0;i<hours.length;i++){
                let numberOfCookies= Math.ceil(limaCookies.randomCustomer() *limaCookies.average);
                limaCookies.hourSales.push(numberOfCookies);
                limaCookies.daySales += numberOfCookies;
            }
            },
            
       render :function(){
           let container=document.getElementById('content-area');
           let h2 =document.createElement('h2');
           container.appendChild(h2);
           h2.textContent='Lima';
           container.appendChild(h2);
           let list=document.createElement('ul');
           container.appendChild(list);
           for (let i=0;i<hours.length;i++){
            let listItem = document.createElement('li');
            listItem.textContent  =hours[i]+': '+ limaCookies.hourSales[i]+' cookies';
            list.appendChild(listItem);
           }
           let listItem = document.createElement('li');
            listItem.textContent  ='Total: '+ limaCookies.daySales+' cookies';
            list.appendChild(listItem);
       },
    }
       limaCookies.hourDaySales();
       limaCookies.render();

   
   