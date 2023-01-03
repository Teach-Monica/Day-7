Day-07

Question:

1. Solving problems using array functions on the rest countries' data.

a). Get all the countries from the Asia continent /region using the Filter function?

Answer:

let xhr=new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload=function() {
    if (xhr.status>=200 && xhr.status<=300) {
        var jsonObj=JSON.parse(this.response);
        console.log(jsonObj);
        //let regionval="Asia";
        const regionName=jsonObj.filter(regions=>regions.region === "Asia")
        const getRegion=regionName.map(regions=>regions.name);
        console.log(getRegion);
        }
    }

    xhr.send();

//output:

['Afghanistan', 'Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei Darussalam', 'Cambodia', 'China', 'Georgia', 
'Hong Kong', 'India', 'Indonesia', 'Iran (Islamic Republic of)', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan',
 "Lao People's Democratic Republic", 'Lebanon', 'Macao', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', "Korea (Democratic People's Republic of)", 
 'Oman', 'Pakistan', 'Palestine, State of', 'Philippines', 'Qatar', 'Saudi Arabia', 'Singapore', 'Korea (Republic of)', 'Sri Lanka', 
 'Syrian Arab Republic', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor-Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan',
 'Vietnam', 'Yemen']


b). Get all the countries with a population of less than 2 lakhs using Filter function?

let xhr=new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload=function() {
    if (xhr.status>=200 && xhr.status<=300) {
        var jsonObj=JSON.parse(this.response);
        console.log(jsonObj);
        //let regionval="Asia";
        const regionName=jsonObj.filter(regions=>regions.population < 200000);
        const getRegion=regionName.map(regions=>regions.name);
        console.log(getRegion);
        }
    }

    xhr.send();

//output:

['Åland Islands', 'American Samoa', 'Andorra', 'Anguilla', 'Antarctica', 'Antigua and Barbuda', 'Aruba', 'Bermuda', 'Bonaire, 
Sint Eustatius and Saba', 'Bouvet Island', 'British Indian Ocean Territory', 'United States Minor Outlying Islands', 'Virgin Islands (British)', 
'Virgin Islands (U.S.)', 'Cayman Islands', 'Christmas Island', 'Cocos (Keeling) Islands', 'Cook Islands', 'Curaçao', 'Dominica', 
'Falkland Islands (Malvinas)', 'Faroe Islands', 'French Southern Territories', 'Gibraltar', 'Greenland', 'Grenada', 'Guam', 'Guernsey', 
'Heard Island and McDonald Islands', 'Vatican City', 'Isle of Man', 'Jersey', 'Kiribati', 'Liechtenstein', 'Marshall Islands', 'Micronesia (Federated States of)', 
'Monaco', 'Montserrat', 'Nauru', 'Niue', 'Norfolk Island', 'Northern Mariana Islands', 'Palau', 'Pitcairn', 'Saint Barthélemy', 'Saint Helena,
 Ascension and Tristan da Cunha', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Martin (French part)', 'Saint Pierre and Miquelon', 
 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Seychelles', 'Sint Maarten (Dutch part)', 'South Georgia and the South Sandwich Islands',
 'Svalbard and Jan Mayen', 'Tokelau', 'Tonga', 'Turks and Caicos Islands', 'Tuvalu', 'Wallis and Futuna']


c). Print the following details name, capital, flag using forEach function?

let xhr=new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload=function() {
    if (xhr.status>=200 && xhr.status<=300) {
        var jsonObj=JSON.parse(this.response);
        console.log(jsonObj);
    //name, capital, flag
    jsonObj.forEach(obj=>{
        console.log(`
        Name:${obj.name},
        Capital:${obj.capital},
        Flag:${obj.flags.svg}
             ${obj.flags.png}
        `);
    })
    }
}
    xhr.send();

//output:

 Name:Afghanistan,
        Capital:Kabul,
        Flag:https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
             https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_the_Taliban.svg/320px-Flag_of_the_Taliban.svg.png
        
script.js:9 
        Name:Åland Islands,
        Capital:Mariehamn,
        Flag:https://flagcdn.com/ax.svg
             https://flagcdn.com/w320/ax.png
        
script.js:9 
        Name:Albania,
        Capital:Tirana,
        Flag:https://flagcdn.com/al.svg
             https://flagcdn.com/w320/al.png
        
script.js:9 
        Name:Algeria,
        Capital:Algiers,
        Flag:https://flagcdn.com/dz.svg
             https://flagcdn.com/w320/dz.png
        
script.js:9 
        Name:American Samoa,
        Capital:Pago Pago,
        Flag:https://flagcdn.com/as.svg
             https://flagcdn.com/w320/as.png
        
script.js:9 
        Name:Andorra,
        Capital:Andorra la Vella,
        Flag:https://flagcdn.com/ad.svg
             https://flagcdn.com/w320/ad.png
        
script.js:9 
        Name:Angola,
        Capital:Luanda,
        Flag:https://flagcdn.com/ao.svg
             https://flagcdn.com/w320/ao.png
        
script.js:9 
        Name:Anguilla,
        Capital:The Valley,
        Flag:https://flagcdn.com/ai.svg
             https://flagcdn.com/w320/ai.png
        
script.js:9 
        Name:Antarctica,
        Capital:undefined,
        Flag:https://flagcdn.com/aq.svg
             https://flagcdn.com/w320/aq.png
        
script.js:9 
        Name:Antigua and Barbuda,
        Capital:Saint John's,
        Flag:https://flagcdn.com/ag.svg
             https://flagcdn.com/w320/ag.png
        
script.js:9 
        Name:Argentina,
        Capital:Buenos Aires,
        Flag:https://flagcdn.com/ar.svg
             https://flagcdn.com/w320/ar.png
        
script.js:9 
        Name:Armenia,
        Capital:Yerevan,
        Flag:https://flagcdn.com/am.svg
             https://flagcdn.com/w320/am.png
        
script.js:9 
        Name:Aruba,
        Capital:Oranjestad,
        Flag:https://flagcdn.com/aw.svg
             https://flagcdn.com/w320/aw.png
        
script.js:9 
        Name:Australia,
        Capital:Canberra,
        Flag:https://flagcdn.com/au.svg
             https://flagcdn.com/w320/au.png
        
script.js:9 
        Name:Austria,
        Capital:Vienna,
        Flag:https://flagcdn.com/at.svg
             https://flagcdn.com/w320/at.png
        
script.js:9 
        Name:Azerbaijan,
        Capital:Baku,
        Flag:https://flagcdn.com/az.svg
             https://flagcdn.com/w320/az.png
        
script.js:9 
        Name:Bahamas,
        Capital:Nassau,
        Flag:https://flagcdn.com/bs.svg
             https://flagcdn.com/w320/bs.png
        
script.js:9 
        Name:Bahrain,
        Capital:Manama,
        Flag:https://flagcdn.com/bh.svg
             https://flagcdn.com/w320/bh.png
        
script.js:9 
        Name:Bangladesh,
        Capital:Dhaka,
        Flag:https://flagcdn.com/bd.svg
             https://flagcdn.com/w320/bd.png
        
script.js:9 
        Name:Barbados,
        Capital:Bridgetown,
        Flag:https://flagcdn.com/bb.svg
             https://flagcdn.com/w320/bb.png
        
script.js:9 
        Name:Belarus,
        Capital:Minsk,
        Flag:https://flagcdn.com/by.svg
             https://flagcdn.com/w320/by.png
        
script.js:9 
        Name:Belgium,
        Capital:Brussels,
        Flag:https://flagcdn.com/be.svg
             https://flagcdn.com/w320/be.png
        
script.js:9 
        Name:Belize,
        Capital:Belmopan,
        Flag:https://flagcdn.com/bz.svg
             https://flagcdn.com/w320/bz.png
        
script.js:9 
        Name:Benin,
        Capital:Porto-Novo,
        Flag:https://flagcdn.com/bj.svg
             https://flagcdn.com/w320/bj.png
        
script.js:9 
        Name:Bermuda,
        Capital:Hamilton,
        Flag:https://flagcdn.com/bm.svg
             https://flagcdn.com/w320/bm.png
        
script.js:9 
        Name:Bhutan,
        Capital:Thimphu,
        Flag:https://flagcdn.com/bt.svg
             https://flagcdn.com/w320/bt.png
        
script.js:9 
        Name:Bolivia (Plurinational State of),
        Capital:Sucre,
        Flag:https://flagcdn.com/bo.svg
             https://flagcdn.com/w320/bo.png
        
script.js:9 
        Name:Bonaire, Sint Eustatius and Saba,
        Capital:Kralendijk,
        Flag:https://flagcdn.com/bq.svg
             https://flagcdn.com/w320/bq.png
        
script.js:9 
        Name:Bosnia and Herzegovina,
        Capital:Sarajevo,
        Flag:https://flagcdn.com/ba.svg
             https://flagcdn.com/w320/ba.png
        
script.js:9 
        Name:Botswana,
        Capital:Gaborone,
        Flag:https://flagcdn.com/bw.svg
             https://flagcdn.com/w320/bw.png
        
script.js:9 
        Name:Bouvet Island,
        Capital:undefined,
        Flag:https://flagcdn.com/bv.svg
             https://flagcdn.com/w320/bv.png
        
script.js:9 
        Name:Brazil,
        Capital:Brasília,
        Flag:https://flagcdn.com/br.svg
             https://flagcdn.com/w320/br.png
        
script.js:9 
        Name:British Indian Ocean Territory,
        Capital:Diego Garcia,
        Flag:https://flagcdn.com/io.svg
             https://flagcdn.com/w320/io.png
        
script.js:9 
        Name:United States Minor Outlying Islands,
        Capital:undefined,
        Flag:https://flagcdn.com/um.svg
             https://flagcdn.com/w320/um.png
        
script.js:9 
        Name:Virgin Islands (British),
        Capital:Road Town,
        Flag:https://flagcdn.com/vg.svg
             https://flagcdn.com/w320/vg.png
        
script.js:9 
        Name:Virgin Islands (U.S.),
        Capital:Charlotte Amalie,
        Flag:https://flagcdn.com/vi.svg
             https://flagcdn.com/w320/vi.png
        
script.js:9 
        Name:Brunei Darussalam,
        Capital:Bandar Seri Begawan,
        Flag:https://flagcdn.com/bn.svg
             https://flagcdn.com/w320/bn.png
        
script.js:9 
        Name:Bulgaria,
        Capital:Sofia,
        Flag:https://flagcdn.com/bg.svg
             https://flagcdn.com/w320/bg.png
        
script.js:9 
        Name:Burkina Faso,
        Capital:Ouagadougou,
        Flag:https://flagcdn.com/bf.svg
             https://flagcdn.com/w320/bf.png
        
script.js:9 
        Name:Burundi,
        Capital:Gitega,
        Flag:https://flagcdn.com/bi.svg
             https://flagcdn.com/w320/bi.png
        
script.js:9 
        Name:Cambodia,
        Capital:Phnom Penh,
        Flag:https://flagcdn.com/kh.svg
             https://flagcdn.com/w320/kh.png
        
script.js:9 
        Name:Cameroon,
        Capital:Yaoundé,
        Flag:https://flagcdn.com/cm.svg
             https://flagcdn.com/w320/cm.png
        
script.js:9 
        Name:Canada,
        Capital:Ottawa,
        Flag:https://flagcdn.com/ca.svg
             https://flagcdn.com/w320/ca.png
        
script.js:9 
        Name:Cabo Verde,
        Capital:Praia,
        Flag:https://flagcdn.com/cv.svg
             https://flagcdn.com/w320/cv.png
        
script.js:9 
        Name:Cayman Islands,
        Capital:George Town,
        Flag:https://flagcdn.com/ky.svg
             https://flagcdn.com/w320/ky.png
        
script.js:9 
        Name:Central African Republic,
        Capital:Bangui,
        Flag:https://flagcdn.com/cf.svg
             https://flagcdn.com/w320/cf.png
        
script.js:9 
        Name:Chad,
        Capital:N'Djamena,
        Flag:https://flagcdn.com/td.svg
             https://flagcdn.com/w320/td.png
        
script.js:9 
        Name:Chile,
        Capital:Santiago,
        Flag:https://flagcdn.com/cl.svg
             https://flagcdn.com/w320/cl.png
        
script.js:9 
        Name:China,
        Capital:Beijing,
        Flag:https://flagcdn.com/cn.svg
             https://flagcdn.com/w320/cn.png
        
script.js:9 
        Name:Christmas Island,
        Capital:Flying Fish Cove,
        Flag:https://flagcdn.com/cx.svg
             https://flagcdn.com/w320/cx.png
        
script.js:9 
        Name:Cocos (Keeling) Islands,
        Capital:West Island,
        Flag:https://flagcdn.com/cc.svg
             https://flagcdn.com/w320/cc.png
        
script.js:9 
        Name:Colombia,
        Capital:Bogotá,
        Flag:https://flagcdn.com/co.svg
             https://flagcdn.com/w320/co.png
        
script.js:9 
        Name:Comoros,
        Capital:Moroni,
        Flag:https://flagcdn.com/km.svg
             https://flagcdn.com/w320/km.png
        
script.js:9 
        Name:Congo,
        Capital:Brazzaville,
        Flag:https://flagcdn.com/cg.svg
             https://flagcdn.com/w320/cg.png
        
script.js:9 
        Name:Congo (Democratic Republic of the),
        Capital:Kinshasa,
        Flag:https://flagcdn.com/cd.svg
             https://flagcdn.com/w320/cd.png
        
script.js:9 
        Name:Cook Islands,
        Capital:Avarua,
        Flag:https://flagcdn.com/ck.svg
             https://flagcdn.com/w320/ck.png
        
script.js:9 
        Name:Costa Rica,
        Capital:San José,
        Flag:https://flagcdn.com/cr.svg
             https://flagcdn.com/w320/cr.png
        
script.js:9 
        Name:Croatia,
        Capital:Zagreb,
        Flag:https://flagcdn.com/hr.svg
             https://flagcdn.com/w320/hr.png
        
script.js:9 
        Name:Cuba,
        Capital:Havana,
        Flag:https://flagcdn.com/cu.svg
             https://flagcdn.com/w320/cu.png
        
script.js:9 
        Name:Curaçao,
        Capital:Willemstad,
        Flag:https://flagcdn.com/cw.svg
             https://flagcdn.com/w320/cw.png
        
script.js:9 
        Name:Cyprus,
        Capital:Nicosia,
        Flag:https://flagcdn.com/cy.svg
             https://flagcdn.com/w320/cy.png
        
script.js:9 
        Name:Czech Republic,
        Capital:Prague,
        Flag:https://flagcdn.com/cz.svg
             https://flagcdn.com/w320/cz.png
        
script.js:9 
        Name:Denmark,
        Capital:Copenhagen,
        Flag:https://flagcdn.com/dk.svg
             https://flagcdn.com/w320/dk.png
        
script.js:9 
        Name:Djibouti,
        Capital:Djibouti,
        Flag:https://flagcdn.com/dj.svg
             https://flagcdn.com/w320/dj.png
        
script.js:9 
        Name:Dominica,
        Capital:Roseau,
        Flag:https://flagcdn.com/dm.svg
             https://flagcdn.com/w320/dm.png
        
script.js:9 
        Name:Dominican Republic,
        Capital:Santo Domingo,
        Flag:https://flagcdn.com/do.svg
             https://flagcdn.com/w320/do.png
        
script.js:9 
        Name:Ecuador,
        Capital:Quito,
        Flag:https://flagcdn.com/ec.svg
             https://flagcdn.com/w320/ec.png
        
script.js:9 
        Name:Egypt,
        Capital:Cairo,
        Flag:https://flagcdn.com/eg.svg
             https://flagcdn.com/w320/eg.png
        
script.js:9 
        Name:El Salvador,
        Capital:San Salvador,
        Flag:https://flagcdn.com/sv.svg
             https://flagcdn.com/w320/sv.png
        
script.js:9 
        Name:Equatorial Guinea,
        Capital:Malabo,
        Flag:https://flagcdn.com/gq.svg
             https://flagcdn.com/w320/gq.png
        
script.js:9 
        Name:Eritrea,
        Capital:Asmara,
        Flag:https://flagcdn.com/er.svg
             https://flagcdn.com/w320/er.png
        
script.js:9 
        Name:Estonia,
        Capital:Tallinn,
        Flag:https://flagcdn.com/ee.svg
             https://flagcdn.com/w320/ee.png
        
script.js:9 
        Name:Ethiopia,
        Capital:Addis Ababa,
        Flag:https://flagcdn.com/et.svg
             https://flagcdn.com/w320/et.png
        
script.js:9 
        Name:Falkland Islands (Malvinas),
        Capital:Stanley,
        Flag:https://flagcdn.com/fk.svg
             https://flagcdn.com/w320/fk.png
        
script.js:9 
        Name:Faroe Islands,
        Capital:Tórshavn,
        Flag:https://flagcdn.com/fo.svg
             https://flagcdn.com/w320/fo.png
        
script.js:9 
        Name:Fiji,
        Capital:Suva,
        Flag:https://flagcdn.com/fj.svg
             https://flagcdn.com/w320/fj.png
        
script.js:9 
        Name:Finland,
        Capital:Helsinki,
        Flag:https://flagcdn.com/fi.svg
             https://flagcdn.com/w320/fi.png
        
script.js:9 
        Name:France,
        Capital:Paris,
        Flag:https://flagcdn.com/fr.svg
             https://flagcdn.com/w320/fr.png
        
script.js:9 
        Name:French Guiana,
        Capital:Cayenne,
        Flag:https://flagcdn.com/gf.svg
             https://flagcdn.com/w320/gf.png
        
script.js:9 
        Name:French Polynesia,
        Capital:Papeetē,
        Flag:https://flagcdn.com/pf.svg
             https://flagcdn.com/w320/pf.png
        
script.js:9 
        Name:French Southern Territories,
        Capital:Port-aux-Français,
        Flag:https://flagcdn.com/tf.svg
             https://flagcdn.com/w320/tf.png
        
script.js:9 
        Name:Gabon,
        Capital:Libreville,
        Flag:https://flagcdn.com/ga.svg
             https://flagcdn.com/w320/ga.png
        
script.js:9 
        Name:Gambia,
        Capital:Banjul,
        Flag:https://flagcdn.com/gm.svg
             https://flagcdn.com/w320/gm.png
        
script.js:9 
        Name:Georgia,
        Capital:Tbilisi,
        Flag:https://flagcdn.com/ge.svg
             https://flagcdn.com/w320/ge.png
        
script.js:9 
        Name:Germany,
        Capital:Berlin,
        Flag:https://flagcdn.com/de.svg
             https://flagcdn.com/w320/de.png
        
script.js:9 
        Name:Ghana,
        Capital:Accra,
        Flag:https://flagcdn.com/gh.svg
             https://flagcdn.com/w320/gh.png
        
script.js:9 
        Name:Gibraltar,
        Capital:Gibraltar,
        Flag:https://flagcdn.com/gi.svg
             https://flagcdn.com/w320/gi.png
        
script.js:9 
        Name:Greece,
        Capital:Athens,
        Flag:https://flagcdn.com/gr.svg
             https://flagcdn.com/w320/gr.png
        
script.js:9 
        Name:Greenland,
        Capital:Nuuk,
        Flag:https://flagcdn.com/gl.svg
             https://flagcdn.com/w320/gl.png
        
script.js:9 
        Name:Grenada,
        Capital:St. George's,
        Flag:https://flagcdn.com/gd.svg
             https://flagcdn.com/w320/gd.png
        
script.js:9 
        Name:Guadeloupe,
        Capital:Basse-Terre,
        Flag:https://flagcdn.com/gp.svg
             https://flagcdn.com/w320/gp.png
        
script.js:9 
        Name:Guam,
        Capital:Hagåtña,
        Flag:https://flagcdn.com/gu.svg
             https://flagcdn.com/w320/gu.png
        
script.js:9 
        Name:Guatemala,
        Capital:Guatemala City,
        Flag:https://flagcdn.com/gt.svg
             https://flagcdn.com/w320/gt.png
        
script.js:9 
        Name:Guernsey,
        Capital:St. Peter Port,
        Flag:https://flagcdn.com/gg.svg
             https://flagcdn.com/w320/gg.png
        
script.js:9 
        Name:Guinea,
        Capital:Conakry,
        Flag:https://flagcdn.com/gn.svg
             https://flagcdn.com/w320/gn.png
        
script.js:9 
        Name:Guinea-Bissau,
        Capital:Bissau,
        Flag:https://flagcdn.com/gw.svg
             https://flagcdn.com/w320/gw.png
        
script.js:9 
        Name:Guyana,
        Capital:Georgetown,
        Flag:https://flagcdn.com/gy.svg
             https://flagcdn.com/w320/gy.png
        
script.js:9 
        Name:Haiti,
        Capital:Port-au-Prince,
        Flag:https://flagcdn.com/ht.svg
             https://flagcdn.com/w320/ht.png
        
script.js:9 
        Name:Heard Island and McDonald Islands,
        Capital:undefined,
        Flag:https://flagcdn.com/hm.svg
             https://flagcdn.com/w320/hm.png
        
script.js:9 
        Name:Vatican City,
        Capital:Vatican City,
        Flag:https://flagcdn.com/va.svg
             https://flagcdn.com/w320/va.png
        
script.js:9 
        Name:Honduras,
        Capital:Tegucigalpa,
        Flag:https://flagcdn.com/hn.svg
             https://flagcdn.com/w320/hn.png
        
script.js:9 
        Name:Hungary,
        Capital:Budapest,
        Flag:https://flagcdn.com/hu.svg
             https://flagcdn.com/w320/hu.png
        
script.js:9 
        Name:Hong Kong,
        Capital:City of Victoria,
        Flag:https://flagcdn.com/hk.svg
             https://flagcdn.com/w320/hk.png
        
script.js:9 
        Name:Iceland,
        Capital:Reykjavík,
        Flag:https://flagcdn.com/is.svg
             https://flagcdn.com/w320/is.png
        
script.js:9 
        Name:India,
        Capital:New Delhi,
        Flag:https://flagcdn.com/in.svg
             https://flagcdn.com/w320/in.png
        
script.js:9 
        Name:Indonesia,
        Capital:Jakarta,
        Flag:https://flagcdn.com/id.svg
             https://flagcdn.com/w320/id.png
        
script.js:9 
        Name:Ivory Coast,
        Capital:Yamoussoukro,
        Flag:https://flagcdn.com/ci.svg
             https://flagcdn.com/w320/ci.png
        
script.js:9 
        Name:Iran (Islamic Republic of),
        Capital:Tehran,
        Flag:https://flagcdn.com/ir.svg
             https://flagcdn.com/w320/ir.png
        
script.js:9 
        Name:Iraq,
        Capital:Baghdad,
        Flag:https://flagcdn.com/iq.svg
             https://flagcdn.com/w320/iq.png
        
script.js:9 
        Name:Ireland,
        Capital:Dublin,
        Flag:https://flagcdn.com/ie.svg
             https://flagcdn.com/w320/ie.png
        
script.js:9 
        Name:Isle of Man,
        Capital:Douglas,
        Flag:https://flagcdn.com/im.svg
             https://flagcdn.com/w320/im.png
        
script.js:9 
        Name:Israel,
        Capital:Jerusalem,
        Flag:https://flagcdn.com/il.svg
             https://flagcdn.com/w320/il.png
        
script.js:9 
        Name:Italy,
        Capital:Rome,
        Flag:https://flagcdn.com/it.svg
             https://flagcdn.com/w320/it.png
        
script.js:9 
        Name:Jamaica,
        Capital:Kingston,
        Flag:https://flagcdn.com/jm.svg
             https://flagcdn.com/w320/jm.png
        
script.js:9 
        Name:Japan,
        Capital:Tokyo,
        Flag:https://flagcdn.com/jp.svg
             https://flagcdn.com/w320/jp.png
        
script.js:9 
        Name:Jersey,
        Capital:Saint Helier,
        Flag:https://flagcdn.com/je.svg
             https://flagcdn.com/w320/je.png
        
script.js:9 
        Name:Jordan,
        Capital:Amman,
        Flag:https://flagcdn.com/jo.svg
             https://flagcdn.com/w320/jo.png
        
script.js:9 
        Name:Kazakhstan,
        Capital:Nur-Sultan,
        Flag:https://flagcdn.com/kz.svg
             https://flagcdn.com/w320/kz.png
        
script.js:9 
        Name:Kenya,
        Capital:Nairobi,
        Flag:https://flagcdn.com/ke.svg
             https://flagcdn.com/w320/ke.png
        
script.js:9 
        Name:Kiribati,
        Capital:South Tarawa,
        Flag:https://flagcdn.com/ki.svg
             https://flagcdn.com/w320/ki.png
        
script.js:9 
        Name:Kuwait,
        Capital:Kuwait City,
        Flag:https://flagcdn.com/kw.svg
             https://flagcdn.com/w320/kw.png
        
script.js:9 
        Name:Kyrgyzstan,
        Capital:Bishkek,
        Flag:https://flagcdn.com/kg.svg
             https://flagcdn.com/w320/kg.png
        
script.js:9 
        Name:Lao People's Democratic Republic,
        Capital:Vientiane,
        Flag:https://flagcdn.com/la.svg
             https://flagcdn.com/w320/la.png
        
script.js:9 
        Name:Latvia,
        Capital:Riga,
        Flag:https://flagcdn.com/lv.svg
             https://flagcdn.com/w320/lv.png
        
script.js:9 
        Name:Lebanon,
        Capital:Beirut,
        Flag:https://flagcdn.com/lb.svg
             https://flagcdn.com/w320/lb.png
        
script.js:9 
        Name:Lesotho,
        Capital:Maseru,
        Flag:https://flagcdn.com/ls.svg
             https://flagcdn.com/w320/ls.png
        
script.js:9 
        Name:Liberia,
        Capital:Monrovia,
        Flag:https://flagcdn.com/lr.svg
             https://flagcdn.com/w320/lr.png
        
script.js:9 
        Name:Libya,
        Capital:Tripoli,
        Flag:https://flagcdn.com/ly.svg
             https://flagcdn.com/w320/ly.png
        
script.js:9 
        Name:Liechtenstein,
        Capital:Vaduz,
        Flag:https://flagcdn.com/li.svg
             https://flagcdn.com/w320/li.png
        
script.js:9 
        Name:Lithuania,
        Capital:Vilnius,
        Flag:https://flagcdn.com/lt.svg
             https://flagcdn.com/w320/lt.png
        
script.js:9 
        Name:Luxembourg,
        Capital:Luxembourg,
        Flag:https://flagcdn.com/lu.svg
             https://flagcdn.com/w320/lu.png
        
script.js:9 
        Name:Macao,
        Capital:undefined,
        Flag:https://flagcdn.com/mo.svg
             https://flagcdn.com/w320/mo.png
        
script.js:9 
        Name:North Macedonia,
        Capital:Skopje,
        Flag:https://flagcdn.com/mk.svg
             https://flagcdn.com/w320/mk.png
        
script.js:9 
        Name:Madagascar,
        Capital:Antananarivo,
        Flag:https://flagcdn.com/mg.svg
             https://flagcdn.com/w320/mg.png
        
script.js:9 
        Name:Malawi,
        Capital:Lilongwe,
        Flag:https://flagcdn.com/mw.svg
             https://flagcdn.com/w320/mw.png
        
script.js:9 
        Name:Malaysia,
        Capital:Kuala Lumpur,
        Flag:https://flagcdn.com/my.svg
             https://flagcdn.com/w320/my.png
        
script.js:9 
        Name:Maldives,
        Capital:Malé,
        Flag:https://flagcdn.com/mv.svg
             https://flagcdn.com/w320/mv.png
        
script.js:9 
        Name:Mali,
        Capital:Bamako,
        Flag:https://flagcdn.com/ml.svg
             https://flagcdn.com/w320/ml.png
        
script.js:9 
        Name:Malta,
        Capital:Valletta,
        Flag:https://flagcdn.com/mt.svg
             https://flagcdn.com/w320/mt.png
        
script.js:9 
        Name:Marshall Islands,
        Capital:Majuro,
        Flag:https://flagcdn.com/mh.svg
             https://flagcdn.com/w320/mh.png
        
script.js:9 
        Name:Martinique,
        Capital:Fort-de-France,
        Flag:https://flagcdn.com/mq.svg
             https://flagcdn.com/w320/mq.png
        
script.js:9 
        Name:Mauritania,
        Capital:Nouakchott,
        Flag:https://flagcdn.com/mr.svg
             https://flagcdn.com/w320/mr.png
        
script.js:9 
        Name:Mauritius,
        Capital:Port Louis,
        Flag:https://flagcdn.com/mu.svg
             https://flagcdn.com/w320/mu.png
        
script.js:9 
        Name:Mayotte,
        Capital:Mamoudzou,
        Flag:https://flagcdn.com/yt.svg
             https://flagcdn.com/w320/yt.png
        
script.js:9 
        Name:Mexico,
        Capital:Mexico City,
        Flag:https://flagcdn.com/mx.svg
             https://flagcdn.com/w320/mx.png
        
script.js:9 
        Name:Micronesia (Federated States of),
        Capital:Palikir,
        Flag:https://flagcdn.com/fm.svg
             https://flagcdn.com/w320/fm.png
        
script.js:9 
        Name:Moldova (Republic of),
        Capital:Chișinău,
        Flag:https://flagcdn.com/md.svg
             https://flagcdn.com/w320/md.png
        
script.js:9 
        Name:Monaco,
        Capital:Monaco,
        Flag:https://flagcdn.com/mc.svg
             https://flagcdn.com/w320/mc.png
        
script.js:9 
        Name:Mongolia,
        Capital:Ulan Bator,
        Flag:https://flagcdn.com/mn.svg
             https://flagcdn.com/w320/mn.png
        
script.js:9 
        Name:Montenegro,
        Capital:Podgorica,
        Flag:https://flagcdn.com/me.svg
             https://flagcdn.com/w320/me.png
        
script.js:9 
        Name:Montserrat,
        Capital:Plymouth,
        Flag:https://flagcdn.com/ms.svg
             https://flagcdn.com/w320/ms.png
        
script.js:9 
        Name:Morocco,
        Capital:Rabat,
        Flag:https://flagcdn.com/ma.svg
             https://flagcdn.com/w320/ma.png
        
script.js:9 
        Name:Mozambique,
        Capital:Maputo,
        Flag:https://flagcdn.com/mz.svg
             https://flagcdn.com/w320/mz.png
        
script.js:9 
        Name:Myanmar,
        Capital:Naypyidaw,
        Flag:https://flagcdn.com/mm.svg
             https://flagcdn.com/w320/mm.png
        
script.js:9 
        Name:Namibia,
        Capital:Windhoek,
        Flag:https://flagcdn.com/na.svg
             https://flagcdn.com/w320/na.png
        
script.js:9 
        Name:Nauru,
        Capital:Yaren,
        Flag:https://flagcdn.com/nr.svg
             https://flagcdn.com/w320/nr.png
        
script.js:9 
        Name:Nepal,
        Capital:Kathmandu,
        Flag:https://flagcdn.com/np.svg
             https://flagcdn.com/w320/np.png
        
script.js:9 
        Name:Netherlands,
        Capital:Amsterdam,
        Flag:https://flagcdn.com/nl.svg
             https://flagcdn.com/w320/nl.png
        
script.js:9 
        Name:New Caledonia,
        Capital:Nouméa,
        Flag:https://flagcdn.com/nc.svg
             https://flagcdn.com/w320/nc.png
        
script.js:9 
        Name:New Zealand,
        Capital:Wellington,
        Flag:https://flagcdn.com/nz.svg
             https://flagcdn.com/w320/nz.png
        
script.js:9 
        Name:Nicaragua,
        Capital:Managua,
        Flag:https://flagcdn.com/ni.svg
             https://flagcdn.com/w320/ni.png
        
script.js:9 
        Name:Niger,
        Capital:Niamey,
        Flag:https://flagcdn.com/ne.svg
             https://flagcdn.com/w320/ne.png
        
script.js:9 
        Name:Nigeria,
        Capital:Abuja,
        Flag:https://flagcdn.com/ng.svg
             https://flagcdn.com/w320/ng.png
        
script.js:9 
        Name:Niue,
        Capital:Alofi,
        Flag:https://flagcdn.com/nu.svg
             https://flagcdn.com/w320/nu.png
        
script.js:9 
        Name:Norfolk Island,
        Capital:Kingston,
        Flag:https://flagcdn.com/nf.svg
             https://flagcdn.com/w320/nf.png
        
script.js:9 
        Name:Korea (Democratic People's Republic of),
        Capital:Pyongyang,
        Flag:https://flagcdn.com/kp.svg
             https://flagcdn.com/w320/kp.png
        
script.js:9 
        Name:Northern Mariana Islands,
        Capital:Saipan,
        Flag:https://flagcdn.com/mp.svg
             https://flagcdn.com/w320/mp.png
        
script.js:9 
        Name:Norway,
        Capital:Oslo,
        Flag:https://flagcdn.com/no.svg
             https://flagcdn.com/w320/no.png
        
script.js:9 
        Name:Oman,
        Capital:Muscat,
        Flag:https://flagcdn.com/om.svg
             https://flagcdn.com/w320/om.png
        
script.js:9 
        Name:Pakistan,
        Capital:Islamabad,
        Flag:https://flagcdn.com/pk.svg
             https://flagcdn.com/w320/pk.png
        
script.js:9 
        Name:Palau,
        Capital:Ngerulmud,
        Flag:https://flagcdn.com/pw.svg
             https://flagcdn.com/w320/pw.png
        
script.js:9 
        Name:Palestine, State of,
        Capital:Ramallah,
        Flag:https://flagcdn.com/ps.svg
             https://flagcdn.com/w320/ps.png
        
script.js:9 
        Name:Panama,
        Capital:Panama City,
        Flag:https://flagcdn.com/pa.svg
             https://flagcdn.com/w320/pa.png
        
script.js:9 
        Name:Papua New Guinea,
        Capital:Port Moresby,
        Flag:https://flagcdn.com/pg.svg
             https://flagcdn.com/w320/pg.png
        
script.js:9 
        Name:Paraguay,
        Capital:Asunción,
        Flag:https://flagcdn.com/py.svg
             https://flagcdn.com/w320/py.png
        
script.js:9 
        Name:Peru,
        Capital:Lima,
        Flag:https://flagcdn.com/pe.svg
             https://flagcdn.com/w320/pe.png
        
script.js:9 
        Name:Philippines,
        Capital:Manila,
        Flag:https://flagcdn.com/ph.svg
             https://flagcdn.com/w320/ph.png
        
script.js:9 
        Name:Pitcairn,
        Capital:Adamstown,
        Flag:https://flagcdn.com/pn.svg
             https://flagcdn.com/w320/pn.png
        
script.js:9 
        Name:Poland,
        Capital:Warsaw,
        Flag:https://flagcdn.com/pl.svg
             https://flagcdn.com/w320/pl.png
        
script.js:9 
        Name:Portugal,
        Capital:Lisbon,
        Flag:https://flagcdn.com/pt.svg
             https://flagcdn.com/w320/pt.png
        
script.js:9 
        Name:Puerto Rico,
        Capital:San Juan,
        Flag:https://flagcdn.com/pr.svg
             https://flagcdn.com/w320/pr.png
        
script.js:9 
        Name:Qatar,
        Capital:Doha,
        Flag:https://flagcdn.com/qa.svg
             https://flagcdn.com/w320/qa.png
        
script.js:9 
        Name:Republic of Kosovo,
        Capital:Pristina,
        Flag:https://flagcdn.com/xk.svg
             https://flagcdn.com/w320/xk.png
        
script.js:9 
        Name:Réunion,
        Capital:Saint-Denis,
        Flag:https://flagcdn.com/re.svg
             https://flagcdn.com/w320/re.png
        
script.js:9 
        Name:Romania,
        Capital:Bucharest,
        Flag:https://flagcdn.com/ro.svg
             https://flagcdn.com/w320/ro.png
        
script.js:9 
        Name:Russian Federation,
        Capital:Moscow,
        Flag:https://flagcdn.com/ru.svg
             https://flagcdn.com/w320/ru.png
        
script.js:9 
        Name:Rwanda,
        Capital:Kigali,
        Flag:https://flagcdn.com/rw.svg
             https://flagcdn.com/w320/rw.png
        
script.js:9 
        Name:Saint Barthélemy,
        Capital:Gustavia,
        Flag:https://flagcdn.com/bl.svg
             https://flagcdn.com/w320/bl.png
        
script.js:9 
        Name:Saint Helena, Ascension and Tristan da Cunha,
        Capital:Jamestown,
        Flag:https://flagcdn.com/sh.svg
             https://flagcdn.com/w320/sh.png
        
script.js:9 
        Name:Saint Kitts and Nevis,
        Capital:Basseterre,
        Flag:https://flagcdn.com/kn.svg
             https://flagcdn.com/w320/kn.png
        
script.js:9 
        Name:Saint Lucia,
        Capital:Castries,
        Flag:https://flagcdn.com/lc.svg
             https://flagcdn.com/w320/lc.png
        
script.js:9 
        Name:Saint Martin (French part),
        Capital:Marigot,
        Flag:https://flagcdn.com/mf.svg
             https://flagcdn.com/w320/mf.png
        
script.js:9 
        Name:Saint Pierre and Miquelon,
        Capital:Saint-Pierre,
        Flag:https://flagcdn.com/pm.svg
             https://flagcdn.com/w320/pm.png
        
script.js:9 
        Name:Saint Vincent and the Grenadines,
        Capital:Kingstown,
        Flag:https://flagcdn.com/vc.svg
             https://flagcdn.com/w320/vc.png
        
script.js:9 
        Name:Samoa,
        Capital:Apia,
        Flag:https://flagcdn.com/ws.svg
             https://flagcdn.com/w320/ws.png
        
script.js:9 
        Name:San Marino,
        Capital:City of San Marino,
        Flag:https://flagcdn.com/sm.svg
             https://flagcdn.com/w320/sm.png
        
script.js:9 
        Name:Sao Tome and Principe,
        Capital:São Tomé,
        Flag:https://flagcdn.com/st.svg
             https://flagcdn.com/w320/st.png
        
script.js:9 
        Name:Saudi Arabia,
        Capital:Riyadh,
        Flag:https://flagcdn.com/sa.svg
             https://flagcdn.com/w320/sa.png
        
script.js:9 
        Name:Senegal,
        Capital:Dakar,
        Flag:https://flagcdn.com/sn.svg
             https://flagcdn.com/w320/sn.png
        
script.js:9 
        Name:Serbia,
        Capital:Belgrade,
        Flag:https://flagcdn.com/rs.svg
             https://flagcdn.com/w320/rs.png
        
script.js:9 
        Name:Seychelles,
        Capital:Victoria,
        Flag:https://flagcdn.com/sc.svg
             https://flagcdn.com/w320/sc.png
        
script.js:9 
        Name:Sierra Leone,
        Capital:Freetown,
        Flag:https://flagcdn.com/sl.svg
             https://flagcdn.com/w320/sl.png
        
script.js:9 
        Name:Singapore,
        Capital:Singapore,
        Flag:https://flagcdn.com/sg.svg
             https://flagcdn.com/w320/sg.png
        
script.js:9 
        Name:Sint Maarten (Dutch part),
        Capital:Philipsburg,
        Flag:https://flagcdn.com/sx.svg
             https://flagcdn.com/w320/sx.png
        
script.js:9 
        Name:Slovakia,
        Capital:Bratislava,
        Flag:https://flagcdn.com/sk.svg
             https://flagcdn.com/w320/sk.png
        
script.js:9 
        Name:Slovenia,
        Capital:Ljubljana,
        Flag:https://flagcdn.com/si.svg
             https://flagcdn.com/w320/si.png
        
script.js:9 
        Name:Solomon Islands,
        Capital:Honiara,
        Flag:https://flagcdn.com/sb.svg
             https://flagcdn.com/w320/sb.png
        
script.js:9 
        Name:Somalia,
        Capital:Mogadishu,
        Flag:https://flagcdn.com/so.svg
             https://flagcdn.com/w320/so.png
        
script.js:9 
        Name:South Africa,
        Capital:Pretoria,
        Flag:https://flagcdn.com/za.svg
             https://flagcdn.com/w320/za.png
        
script.js:9 
        Name:South Georgia and the South Sandwich Islands,
        Capital:King Edward Point,
        Flag:https://flagcdn.com/gs.svg
             https://flagcdn.com/w320/gs.png
        
script.js:9 
        Name:Korea (Republic of),
        Capital:Seoul,
        Flag:https://flagcdn.com/kr.svg
             https://flagcdn.com/w320/kr.png
        
script.js:9 
        Name:Spain,
        Capital:Madrid,
        Flag:https://flagcdn.com/es.svg
             https://flagcdn.com/w320/es.png
        
script.js:9 
        Name:Sri Lanka,
        Capital:Sri Jayawardenepura Kotte,
        Flag:https://flagcdn.com/lk.svg
             https://flagcdn.com/w320/lk.png
        
script.js:9 
        Name:Sudan,
        Capital:Khartoum,
        Flag:https://flagcdn.com/sd.svg
             https://flagcdn.com/w320/sd.png
        
script.js:9 
        Name:South Sudan,
        Capital:Juba,
        Flag:https://flagcdn.com/ss.svg
             https://flagcdn.com/w320/ss.png
        
script.js:9 
        Name:Suriname,
        Capital:Paramaribo,
        Flag:https://flagcdn.com/sr.svg
             https://flagcdn.com/w320/sr.png
        
script.js:9 
        Name:Svalbard and Jan Mayen,
        Capital:Longyearbyen,
        Flag:https://flagcdn.com/sj.svg
             https://flagcdn.com/w320/sj.png
        
script.js:9 
        Name:Swaziland,
        Capital:Mbabane,
        Flag:https://flagcdn.com/sz.svg
             https://flagcdn.com/w320/sz.png
        
script.js:9 
        Name:Sweden,
        Capital:Stockholm,
        Flag:https://flagcdn.com/se.svg
             https://flagcdn.com/w320/se.png
        
script.js:9 
        Name:Switzerland,
        Capital:Bern,
        Flag:https://flagcdn.com/ch.svg
             https://flagcdn.com/w320/ch.png
        
script.js:9 
        Name:Syrian Arab Republic,
        Capital:Damascus,
        Flag:https://flagcdn.com/sy.svg
             https://flagcdn.com/w320/sy.png
        
script.js:9 
        Name:Taiwan,
        Capital:Taipei,
        Flag:https://flagcdn.com/tw.svg
             https://flagcdn.com/w320/tw.png
        
script.js:9 
        Name:Tajikistan,
        Capital:Dushanbe,
        Flag:https://flagcdn.com/tj.svg
             https://flagcdn.com/w320/tj.png
        
script.js:9 
        Name:Tanzania, United Republic of,
        Capital:Dodoma,
        Flag:https://flagcdn.com/tz.svg
             https://flagcdn.com/w320/tz.png
        
script.js:9 
        Name:Thailand,
        Capital:Bangkok,
        Flag:https://flagcdn.com/th.svg
             https://flagcdn.com/w320/th.png
        
script.js:9 
        Name:Timor-Leste,
        Capital:Dili,
        Flag:https://flagcdn.com/tl.svg
             https://flagcdn.com/w320/tl.png
        
script.js:9 
        Name:Togo,
        Capital:Lomé,
        Flag:https://flagcdn.com/tg.svg
             https://flagcdn.com/w320/tg.png
        
script.js:9 
        Name:Tokelau,
        Capital:Fakaofo,
        Flag:https://flagcdn.com/tk.svg
             https://flagcdn.com/w320/tk.png
        
script.js:9 
        Name:Tonga,
        Capital:Nuku'alofa,
        Flag:https://flagcdn.com/to.svg
             https://flagcdn.com/w320/to.png
        
script.js:9 
        Name:Trinidad and Tobago,
        Capital:Port of Spain,
        Flag:https://flagcdn.com/tt.svg
             https://flagcdn.com/w320/tt.png
        
script.js:9 
        Name:Tunisia,
        Capital:Tunis,
        Flag:https://flagcdn.com/tn.svg
             https://flagcdn.com/w320/tn.png
        
script.js:9 
        Name:Turkey,
        Capital:Ankara,
        Flag:https://flagcdn.com/tr.svg
             https://flagcdn.com/w320/tr.png
        
script.js:9 
        Name:Turkmenistan,
        Capital:Ashgabat,
        Flag:https://flagcdn.com/tm.svg
             https://flagcdn.com/w320/tm.png
        
script.js:9 
        Name:Turks and Caicos Islands,
        Capital:Cockburn Town,
        Flag:https://flagcdn.com/tc.svg
             https://flagcdn.com/w320/tc.png
        
script.js:9 
        Name:Tuvalu,
        Capital:Funafuti,
        Flag:https://flagcdn.com/tv.svg
             https://flagcdn.com/w320/tv.png
        
script.js:9 
        Name:Uganda,
        Capital:Kampala,
        Flag:https://flagcdn.com/ug.svg
             https://flagcdn.com/w320/ug.png
        
script.js:9 
        Name:Ukraine,
        Capital:Kyiv,
        Flag:https://flagcdn.com/ua.svg
             https://flagcdn.com/w320/ua.png
        
script.js:9 
        Name:United Arab Emirates,
        Capital:Abu Dhabi,
        Flag:https://flagcdn.com/ae.svg
             https://flagcdn.com/w320/ae.png
        
script.js:9 
        Name:United Kingdom of Great Britain and Northern Ireland,
        Capital:London,
        Flag:https://flagcdn.com/gb.svg
             https://flagcdn.com/w320/gb.png
        
script.js:9 
        Name:United States of America,
        Capital:Washington, D.C.,
        Flag:https://flagcdn.com/us.svg
             https://flagcdn.com/w320/us.png
        
script.js:9 
        Name:Uruguay,
        Capital:Montevideo,
        Flag:https://flagcdn.com/uy.svg
             https://flagcdn.com/w320/uy.png
        
script.js:9 
        Name:Uzbekistan,
        Capital:Tashkent,
        Flag:https://flagcdn.com/uz.svg
             https://flagcdn.com/w320/uz.png
        
script.js:9 
        Name:Vanuatu,
        Capital:Port Vila,
        Flag:https://flagcdn.com/vu.svg
             https://flagcdn.com/w320/vu.png
        
script.js:9 
        Name:Venezuela (Bolivarian Republic of),
        Capital:Caracas,
        Flag:https://flagcdn.com/ve.svg
             https://flagcdn.com/w320/ve.png
        
script.js:9 
        Name:Vietnam,
        Capital:Hanoi,
        Flag:https://flagcdn.com/vn.svg
             https://flagcdn.com/w320/vn.png
        
script.js:9 
        Name:Wallis and Futuna,
        Capital:Mata-Utu,
        Flag:https://flagcdn.com/wf.svg
             https://flagcdn.com/w320/wf.png
        
script.js:9 
        Name:Western Sahara,
        Capital:El Aaiún,
        Flag:https://flagcdn.com/eh.svg
             https://flagcdn.com/w320/eh.png
        
script.js:9 
        Name:Yemen,
        Capital:Sana'a,
        Flag:https://flagcdn.com/ye.svg
             https://flagcdn.com/w320/ye.png
        
script.js:9 
        Name:Zambia,
        Capital:Lusaka,
        Flag:https://flagcdn.com/zm.svg
             https://flagcdn.com/w320/zm.png
        
script.js:9 
        Name:Zimbabwe,
        Capital:Harare,
        Flag:https://flagcdn.com/zw.svg
             https://flagcdn.com/w320/zw.png
       


d). Print the total population of countries using reduce function?


let xhr=new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload=function() {
    if (xhr.status>=200 && xhr.status<=300) {
        var jsonObj=JSON.parse(this.response);
        console.log(jsonObj);
    const totalPopulation=jsonObj.reduce((acc,item) => {
        return acc+item.population;
    },0);
        console.log(totalPopulation);
    }
}
    xhr.send();

//output:

7759438109

e). Print the country which uses US Dollars as currency.

let xhr=new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v2/all");
xhr.onload=function() {
    if (xhr.status>=200 && xhr.status<=300) {
        var jsonObj=JSON.parse(this.response);
        console.log(jsonObj);
        let newData=[];
jsonObj.map(item=>{
    try{if(item.currencies[0].code==="USD"){
        newData.push(item.name)
    }}
    catch(e){
        console.log(e)
    }
})
        console.log(newData);
     }
}
xhr.send();

//output:

 ['American Samoa', 'Bonaire, Sint Eustatius and Saba', 'British Indian Ocean Territory', 'Virgin Islands (British)',
 'Virgin Islands (U.S.)', 'Ecuador', 'El Salvador', 'Guam', 'Marshall Islands', 'Micronesia (Federated States of)',
 'Northern Mariana Islands', 'Palau', 'Puerto Rico', 'Timor-Leste', 'Turks and Caicos Islands', 'United States of America']