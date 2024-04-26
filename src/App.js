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

        <button onClick={() => navigateTo('/JavaScript')}><img src="/img/js.png" alt="JavaScript"/></button>
        <button onClick={() => navigateTo('/Python')}><img src="/img/python.png" alt="Python"/></button>
        <button onClick={() => navigateTo('/CSharp')}><img src="/img/csharp.png" alt="CSharp"/></button>
        <button onClick={() => navigateTo('/Java')}><img src="/img/java.png" alt="Java"/></button>
    </div>
);

const JavaScript = ({ navigateTo }) => (
    <div>
        <h1>JavaScript</h1>
        <p>JavaScript je visoko-nivojski, interpretirani programski jezik, ki se pogosto uporablja za ustvarjanje interaktivnih spletnih strani. Bil je ustvarjen za uporabo v spletnih brskalnikih, vendar se je sčasoma razširil tudi na druge platforme, kot so strežniki in mobilne aplikacije.</p>
        <p>JavaScript omogoča dinamično spreminjanje vsebine in vedenja spletnih strani, kot so animacije, preverjanje obrazcev, učinki zvoka in video posnetkov ter komunikacija s strežnikom brez potrebe po ponovnem nalaganju strani. Poleg tega JavaScript igra ključno vlogo pri razvoju spletnih aplikacij in naprednih spletnih tehnologij, kot so Angular, React in Node.js.</p>
        <p>Jezična sintaksa JavaScripta je podobna drugim programskim jezikom, kot je Java, vendar je bolj dinamična in fleksibilna. JavaScript se je sčasoma razvil v močan jezik s široko podporo in ogromno skupnostjo razvijalcev.</p>
        <a href="https://www.programiz.com/javascript/online-compiler/"><img src="/img/jsexample.png" alt="Click to check out JavaScript examples"></img></a>
        <button onClick={() => navigateTo('/')}>Go back</button>
    </div>
);

const Python = ({ navigateTo }) => (
    <div>
        <h1>Python</h1>
        <p>Python je visoko-nivojski, interpretirani programski jezik, ki je znan po svoji preprostosti, jasnosti in moči. Ustvaril ga je Guido van Rossum in prvič objavil leta 1991. Python spada med univerzalne jezike, saj se uporablja v različnih področjih, kot so razvoj spletnih aplikacij, znanstveno računanje, umetna inteligenca, analiza podatkov, avtomatizacija, igre in še več.</p>
        <p>Python odlikuje berljiva in enostavna sintaksa, kar ga naredi idealnega za začetnike in izkušene programerje. Podpira različne paradigme, vključno z objektno-orijentiranim, proceduralnim, funkcijskim in strukturnim programiranjem. Poleg tega Python ima obsežno standardno knjižnico in veliko skupnost, ki prispeva s tisočimi knjižnicami in orodji, kar olajša razvoj kompleksnih aplikacij.</p>
        <p>Python je tudi platformsko neodvisen jezik, kar pomeni, da ga je mogoče izvajati na različnih operacijskih sistemih. Priljubljenost Pythona nenehno narašča zaradi njegove enostavnosti, raznovrstnosti in zmogljivosti, zaradi česar je eden najbolj uporabljenih jezikov v svetu programskega razvoja.</p>
        <a href="https://www.programiz.com/python-programming/online-compiler/"><img src="/img/pythonexample.png" alt="Click to check out Python examples"></img></a>
        <button onClick={() => navigateTo('/')}>Go back</button>
    </div>
);
const Java = ({ navigateTo }) => (
  <div>
      <h1>Java</h1>
      <p>Java je visoko-nivojski, objektno-usmerjen programski jezik, ki ga je razvilo podjetje Sun Microsystems (zdaj del Oracle Corporation) leta 1995. Glavna ideja za Java je bila, da bi bil platformsko neodvisen jezik, kar pomeni, da se lahko programi napisani v Javi izvajajo na različnih platformah, ki podpirajo Java Virtual Machine (JVM), vključno z računalniki, mobilnimi napravami in strežniki.</p>
      <p>Java je priljubljena v različnih področjih, vključno z razvojem spletnih aplikacij, mobilnih aplikacij (s pomočjo Android platforme), velikih poslovnih sistemov in iger. Poleg tega je Java znana po svoji robustnosti, varnosti in zmogljivosti.</p>
      <p>Jezik Java se odlikuje po sintaksi, podobni C++, vendar s manj kompleksnosti in boljšo podporo za objektno-usmerjene principe. Poleg tega je Java znana po svoji obsežni standardni knjižnici, ki omogoča razvoj različnih aplikacij brez potrebe po pisanju veliko kode "od začetka".</p>
      <a href="https://www.programiz.com/java-programming/online-compiler/"><img src="/img/javaexample.png" alt="Click to check out Java examples"></img></a>
      <button onClick={() => navigateTo('/')}>Go back</button>
  </div>
);
const CSharp = ({ navigateTo }) => (
  <div>
      <h1>CSharp</h1>
      <p>C#  je visoko-nivojski, objektno-usmerjeni programski jezik, ki ga je razvil Microsoft kot ključni jezik za razvoj aplikacij na platformi Microsoft .NET. C# je bil prvič predstavljen leta 2000 in je postal eden najpomembnejših jezikov za razvoj aplikacij za Windows okolje.</p>
      <p>C# združuje močno tipizacijo in sintaktično čistost s sodobnimi funkcionalnostmi, kot so upravljanje pomnilnika, delegati, dogodki in lambda izrazi. Uporablja se za razvoj različnih vrst aplikacij, vključno z namiznimi aplikacijami, spletnimi aplikacijami, mobilnimi aplikacijami (na platformi Xamarin), igrami in spletnimi storitvami.</p>
      <p>Eden od ključnih elementov C# je Microsoftova integrirana razvojna okolja, kot je Visual Studio, ki programerjem omogočajo učinkovit razvoj, od razvoja kode do preverjanja sintakse in odpravljanja napak. C# je priljubljen zaradi svoje zmogljivosti, zanesljivosti in obsežne podpore skupnosti in orodij, ki omogočajo razvoj visoko kakovostnih aplikacij za različne namene.</p>
      <a href="https://www.programiz.com/csharp-programming/online-compiler/#google_vignette"><img src="/img/csharpexample.png" alt="Click to check out C# examples"></img></a>
      <button onClick={() => navigateTo('/')}>Go back</button>
  </div>
);
const NotFoundPage = () => <h1>404 - Not Found</h1>;

export default App;
