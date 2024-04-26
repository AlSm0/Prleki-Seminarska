import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleUrlChange = () => setCurrentPath(window.location.pathname);
        window.addEventListener('popstate', handleUrlChange);
        return () => {
            window.removeEventListener('popstate', handleUrlChange);
        };
    }, []);

    const navigateTo = (path) => {
        window.history.pushState({}, '', path);
        setCurrentPath(path);
    };

    return (
        <div>
            <h1>PRLEKI - Seminarska naloga</h1>
            <p>Avtorji: Aljaž Smodiš, Blaž Sekol, Jernej Štern, Bine Varžič</p>
            <button onClick={() => navigateTo('/')}>Home</button>
            <button onClick={() => navigateTo('/JavaScript')}>JavaScript</button>
            <button onClick={() => navigateTo('/Python')}>Python</button>
            <button onClick={() => navigateTo('/CSharp')}>CSharp</button>
            <button onClick={() => navigateTo('/Java')}>Java</button>
            <hr />
            <Router currentPath={currentPath} navigateTo={navigateTo} />
        </div>
    );
}

const Router = ({ currentPath, navigateTo }) => {
    switch (currentPath) {
        case '/':
            return <HomePage navigateTo={navigateTo} />;
        case '/JavaScript':
            return <JavaScript navigateTo={navigateTo} />;
        case '/Python':
            return <Python navigateTo={navigateTo} />;
        case '/CSharp':
            return <CSharp navigateTo={navigateTo} />;
        case '/Java':
            return <Java navigateTo={navigateTo} />;
        default:
            return <NotFoundPage />;
    }
};

const HomePage = ({ navigateTo }) => (
    <div>
        <h1>Welcome to the Programming hub</h1>
        <p>Java je znana po svoji neodvisnosti od platforme, zaradi česar je priljubljena za poslovne aplikacije. JavaScript je namenjen predvsem za spletno skriptiranje, vendar se razširi na strežniško programiranje z Node.js. C# združuje moč C++ s preprostostjo Jave, predvsem za razvoj sistema Windows. Vsestranskost Pythona zajema splet, znanstveno računalništvo in umetno inteligenco, cenjen zaradi svoje preprostosti. Vsak jezik ima prednosti: Java in C# za podjetja, JavaScript za splet in Python za vsestranskost.</p>

        <button onClick={() => navigateTo('/JavaScript')}><img src="https://cdn.discordapp.com/attachments/1181237953234731053/1233341313017974884/JavaScript-logo.png?ex=662cbe1b&is=662b6c9b&hm=14e344bd09afb0b761d0b86a6f5227d4e50d1ab763dbe0e3f9ca1a469f803fba&" alt="JavaScript" border="0" width="250" height="250"/></button>
        <button onClick={() => navigateTo('/Python')}><img src="https://cdn.discordapp.com/attachments/1181237953234731053/1233343650046545963/1200px-Python_logo_51.png?ex=662cc048&is=662b6ec8&hm=d2c6d19bcdb608433ee1fea4eb0561f64f586c8f0b049b26db19707f48eaca46&" alt="Python" border="0" width="250" height="250"/></button>
        <button onClick={() => navigateTo('/CSharp')}><img src="https://media.discordapp.net/attachments/1181237953234731053/1233343962517868586/63065002cd563e1cd1cead28_eaadfe64.png?ex=662cc093&is=662b6f13&hm=7c44ef59e0d441a78dacba9f15fed2981ed6bab69d0f21ec6064fc315fb15252&=&format=webp&quality=lossless&width=630&height=630" alt="CSharp" border="0" width="250" height="250"/></button>
        <button onClick={() => navigateTo('/Java')}><img src="https://media.discordapp.net/attachments/1181237953234731053/1233343847178960916/free-java-60-1174953.png?ex=662cc077&is=662b6ef7&hm=c35147f17f73abd01b50de6f7140c4692397d50239f131113d1a779a79429c7a&=&format=webp&quality=lossless" alt="Java" border="0" width="250" height="250"/></button>
    </div>
);

const JavaScript = ({ navigateTo }) => (
    <div>
        <h1>JavaScript</h1>
        <p>JavaScript je visoko-nivojski, interpretirani programski jezik, ki se pogosto uporablja za ustvarjanje interaktivnih spletnih strani. Bil je ustvarjen za uporabo v spletnih brskalnikih, vendar se je sčasoma razširil tudi na druge platforme, kot so strežniki in mobilne aplikacije.</p>
        <p>JavaScript omogoča dinamično spreminjanje vsebine in vedenja spletnih strani, kot so animacije, preverjanje obrazcev, učinki zvoka in video posnetkov ter komunikacija s strežnikom brez potrebe po ponovnem nalaganju strani. Poleg tega JavaScript igra ključno vlogo pri razvoju spletnih aplikacij in naprednih spletnih tehnologij, kot so Angular, React in Node.js.</p>
        <p>Jezična sintaksa JavaScripta je podobna drugim programskim jezikom, kot je Java, vendar je bolj dinamična in fleksibilna. JavaScript se je sčasoma razvil v močan jezik s široko podporo in ogromno skupnostjo razvijalcev.</p>
        <p>JavaScript example:</p>
        <a href="https://www.programiz.com/javascript/online-compiler/"><img src="https://media.discordapp.net/attachments/1232678763658084362/1233150717171073154/image.png?ex=662cb559&is=662b63d9&hm=0fe1bbf1b4d576a2c74d4c6824f55b020cde4579f6ba09d5ed7fc97a3e8ae6ee&=&format=webp&quality=lossless" alt="Click to check out JavaScript examples"></img></a>
        <a href="https://www.javascript.com/"><img src="https://cdn.discordapp.com/attachments/1181237953234731053/1233341313017974884/JavaScript-logo.png?ex=662cbe1b&is=662b6c9b&hm=14e344bd09afb0b761d0b86a6f5227d4e50d1ab763dbe0e3f9ca1a469f803fba&" alt="Try JavaScript yourself" width="250" height="250"></img></a>
        <button onClick={() => navigateTo('/')}><img src="https://media.discordapp.net/attachments/1181237953234731053/1233347931889991680/image01.png?ex=662cc445&is=662b72c5&hm=7f220e44ec658468452a340182b9d4d9f0f1b7a2b210ee03588f1de5482ada0f&=&format=webp&quality=lossless" border="0" alt="Go Back" width="100" height="40"></img></button>
    </div>
);

const Python = ({ navigateTo }) => (
    <div>
        <h1>Python</h1>
        <p>Python je visoko-nivojski, interpretirani programski jezik, ki je znan po svoji preprostosti, jasnosti in moči. Ustvaril ga je Guido van Rossum in prvič objavil leta 1991. Python spada med univerzalne jezike, saj se uporablja v različnih področjih, kot so razvoj spletnih aplikacij, znanstveno računanje, umetna inteligenca, analiza podatkov, avtomatizacija, igre in še več.</p>
        <p>Python odlikuje berljiva in enostavna sintaksa, kar ga naredi idealnega za začetnike in izkušene programerje. Podpira različne paradigme, vključno z objektno-orijentiranim, proceduralnim, funkcijskim in strukturnim programiranjem. Poleg tega Python ima obsežno standardno knjižnico in veliko skupnost, ki prispeva s tisočimi knjižnicami in orodji, kar olajša razvoj kompleksnih aplikacij.</p>
        <p>Python je tudi platformsko neodvisen jezik, kar pomeni, da ga je mogoče izvajati na različnih operacijskih sistemih. Priljubljenost Pythona nenehno narašča zaradi njegove enostavnosti, raznovrstnosti in zmogljivosti, zaradi česar je eden najbolj uporabljenih jezikov v svetu programskega razvoja.</p>
        <p>Python example:</p>
        <a href="https://www.programiz.com/python-programming/online-compiler/"><img src="https://media.discordapp.net/attachments/1232678763658084362/1233150177695764580/image.png?ex=662cb4d9&is=662b6359&hm=3818cfe57fea0a11e44f1eb059e69d509790796cdb5bfd56891969ec3fbb8a82&=&format=webp&quality=lossless" alt="Click to check out Python examples"></img></a>   
        <a href="https://www.python.org/"><img src="https://cdn.discordapp.com/attachments/1181237953234731053/1233343650046545963/1200px-Python_logo_51.png?ex=662cc048&is=662b6ec8&hm=d2c6d19bcdb608433ee1fea4eb0561f64f586c8f0b049b26db19707f48eaca46&" alt="Try Python yourself" width="250" height="250"></img></a>
        <button onClick={() => navigateTo('/')}><img src="https://media.discordapp.net/attachments/1181237953234731053/1233347931889991680/image01.png?ex=662cc445&is=662b72c5&hm=7f220e44ec658468452a340182b9d4d9f0f1b7a2b210ee03588f1de5482ada0f&=&format=webp&quality=lossless" border="0" alt="Go Back" width="100" height="40"></img></button>
    </div>
);
const Java = ({ navigateTo }) => (
  <div>
      <h1>Java</h1>
      <p>Java je visoko-nivojski, objektno-usmerjen programski jezik, ki ga je razvilo podjetje Sun Microsystems (zdaj del Oracle Corporation) leta 1995. Glavna ideja za Java je bila, da bi bil platformsko neodvisen jezik, kar pomeni, da se lahko programi napisani v Javi izvajajo na različnih platformah, ki podpirajo Java Virtual Machine (JVM), vključno z računalniki, mobilnimi napravami in strežniki.</p>
      <p>Java je priljubljena v različnih področjih, vključno z razvojem spletnih aplikacij, mobilnih aplikacij (s pomočjo Android platforme), velikih poslovnih sistemov in iger. Poleg tega je Java znana po svoji robustnosti, varnosti in zmogljivosti.</p>
      <p>Jezik Java se odlikuje po sintaksi, podobni C++, vendar s manj kompleksnosti in boljšo podporo za objektno-usmerjene principe. Poleg tega je Java znana po svoji obsežni standardni knjižnici, ki omogoča razvoj različnih aplikacij brez potrebe po pisanju veliko kode "od začetka".</p>
      <p>Java example:</p>
      <a href="https://www.programiz.com/java-programming/online-compiler/"><img src="https://media.discordapp.net/attachments/1232678763658084362/1233150428322201721/image.png?ex=662cb514&is=662b6394&hm=21d9b8e07305052c75b991bdb1f35d5048c28e89e36d1c1bcd215dc5eeed4616&=&format=webp&quality=lossless" alt="Click to check out Java examples"></img></a>
      <a href="https://www.java.com/en/"><img src="https://media.discordapp.net/attachments/1181237953234731053/1233343847178960916/free-java-60-1174953.png?ex=662cc077&is=662b6ef7&hm=c35147f17f73abd01b50de6f7140c4692397d50239f131113d1a779a79429c7a&=&format=webp&quality=lossless" alt="Try Java yourself" width="250" height="250"></img></a>
      <button onClick={() => navigateTo('/')}><img src="https://media.discordapp.net/attachments/1181237953234731053/1233347931889991680/image01.png?ex=662cc445&is=662b72c5&hm=7f220e44ec658468452a340182b9d4d9f0f1b7a2b210ee03588f1de5482ada0f&=&format=webp&quality=lossless" border="0" alt="Go Back" width="100" height="40"></img></button>
  </div>
);
const CSharp = ({ navigateTo }) => (
  <div>
      <h1>CSharp</h1>
      <p>C#  je visoko-nivojski, objektno-usmerjeni programski jezik, ki ga je razvil Microsoft kot ključni jezik za razvoj aplikacij na platformi Microsoft .NET. C# je bil prvič predstavljen leta 2000 in je postal eden najpomembnejših jezikov za razvoj aplikacij za Windows okolje.</p>
      <p>C# združuje močno tipizacijo in sintaktično čistost s sodobnimi funkcionalnostmi, kot so upravljanje pomnilnika, delegati, dogodki in lambda izrazi. Uporablja se za razvoj različnih vrst aplikacij, vključno z namiznimi aplikacijami, spletnimi aplikacijami, mobilnimi aplikacijami (na platformi Xamarin), igrami in spletnimi storitvami.</p>
      <p>Eden od ključnih elementov C# je Microsoftova integrirana razvojna okolja, kot je Visual Studio, ki programerjem omogočajo učinkovit razvoj, od razvoja kode do preverjanja sintakse in odpravljanja napak. C# je priljubljen zaradi svoje zmogljivosti, zanesljivosti in obsežne podpore skupnosti in orodij, ki omogočajo razvoj visoko kakovostnih aplikacij za različne namene.</p>
      <p>C# example:</p>
      <a href="https://www.programiz.com/csharp-programming/online-compiler/#google_vignette"><img src="https://media.discordapp.net/attachments/1232678763658084362/1233149860107124867/image.png?ex=662cb48d&is=662b630d&hm=b12a0ec81fa48aed3f2ecb00e3950435dff174bed8900c1bbdecf4a49a2ba602&=&format=webp&quality=lossless" alt="Click to check out C# examples"></img></a>
      <a href="https://dotnet.microsoft.com/en-us/languages/csharp"><img src="https://media.discordapp.net/attachments/1181237953234731053/1233343962517868586/63065002cd563e1cd1cead28_eaadfe64.png?ex=662cc093&is=662b6f13&hm=7c44ef59e0d441a78dacba9f15fed2981ed6bab69d0f21ec6064fc315fb15252&=&format=webp&quality=lossless&width=630&height=630" alt="Try CSharp yourself" width="250" height="250"></img></a>
      <button onClick={() => navigateTo('/')}><img src="https://media.discordapp.net/attachments/1181237953234731053/1233347931889991680/image01.png?ex=662cc445&is=662b72c5&hm=7f220e44ec658468452a340182b9d4d9f0f1b7a2b210ee03588f1de5482ada0f&=&format=webp&quality=lossless" border="0" alt="Go Back" width="100" height="40"></img></button>
  </div>
);
const NotFoundPage = () => <h1>404 - Not Found</h1>;

export default App;
