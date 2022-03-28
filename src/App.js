import React from "react";
import Cable from "./Dropwire";
//import TwitterTweetEmbed from "./TwitterTweetEmbed";
import { UAParser } from "ua-parser-js";
/*import firebase from "./init-firebase.js";
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  addDoc,
  getDoc,
  updateDoc,
  setDoc,
  increment
} from "firebase/firestore";*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var parser = new UAParser();
    const name = parser.getBrowser().name;
    console.log(name);
    //const firestore = getFirestore(firebase);
    document.cookie = "";
    this.state = {
      posts: [],
      trigger: false,
      //firestore,
      browser: name,
      scrollTop: 0,
      serviceCancelingImages: name.includes("Safari")
    };
    for (let i = 0; i < 220; i++) {
      this["scrollImg" + i] = React.createRef();
    }
  }
  /*componentDidMount = () => {
    //document.getElementsByTagName("body")[0].style.margin = 0;
    document.body.style.margin = 0;
    window.addEventListener("resize", this.refresh);
    window.addEventListener("scroll", this.handleScroll);
    this.refresh(true);

    onSnapshot(doc(this.state.firestore, "countData", "only"), (doc) => {
      if (doc.exists()) {
        var foo = doc.data();
        foo.id = doc.id;
        this.setState({ signatures: foo.count });
      }
    });
    onSnapshot(collection(this.state.firestore, "posts"), (snapshot) => {
      snapshot.docs.forEach((doc) => {
        if (doc.exists()) {
          var foo = doc.data();
          foo.id = doc.id;
          this.setState({ posts: foo.count });
        }
      });
    });
  };
  componentWillUnmount = () => {
    document.body.style.margin = null;
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.resizeTimer);
    window.removeEventListener("resize", this.refresh);
    window.removeEventListener("scroll", this.handleScroll);
  };
  handleScroll = (e) => {
    if (!this.state.offScroll) {
      const scrollTop = window.scrollY;
      this.setState(
        {
          scrolling: true,
          scrollTop
        },
        () => {
          clearTimeout(this.scrollTimeout);
          this.scrollTimeout = setTimeout(() => {
            this.setState({
              scrolling: false
            });
          }, 900);
        }
      );
    }
  };
  refresh = (first) => {
    const width =
      (this.state.ios ? window.screen.availWidth : window.innerWidth) - 20;
    if (first || Math.abs(this.state.lastWidth - width) > 0) {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.setState({
          lastWidth: width,
          width,
          availableHeight: this.state.ios
            ? window.screen.availHeight - 20
            : window.innerHeight
        });
      }, 600);
    }
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (
      this.state.first !== "" &&
      this.state.last !== "" &&
      this.state.address !== "" &&
      this.state.city !== "" &&
      this.state.zip !== ""
    ) {
      /*console.log("do");
      firebase
        .firestore()
        .collection("signatures")
        .where("first", "==", this.state.first)
        .where("middle", "==", this.state.middle)
        .where("last", "==", this.state.last)
        .where("address", "==", this.state.address)
        .where("city", "==", this.state.city)
        .where("zip", "==", this.state.zip)
        .get()
        .then((doc) => {
          if (doc.exists) {
            window.alert("you've signed! 🎉");
          } else {*

      addDoc(collection(getFirestore(firebase), "signatures"), {
        first: this.state.first,
        middle: this.state.middle,
        last: this.state.last,
        address: this.state.address,
        city: this.state.city,
        zip: this.state.zip
      }).then(() => {
        this.setState({ finished: true });
        const counts = collection(getFirestore(firebase), "countData");

        getDoc(doc(counts, "only"))
          .then((dc) => {
            if (dc.exists()) {
              updateDoc(doc(counts, "only"), {
                count: increment(1)
              });
            } else {
              setDoc(doc(counts, "only"), {
                count: increment(1)
              });
            }
          })
          .then(() => {
            window.alert("you've signed! 🎉");
            this.setState({ finished: true });
          })
          .catch((err) => {
            console.log(err.message);
            this.setState({ finished: true });
          });
      });
    } else
      return window.alert(
        "please complete required fields, all except middle name"
      );
  };*/
  componentDidUpdate = (prevProps) => {
    if (this.props.pathname !== prevProps.pathname) {
      clearTimeout(this.check);
      const check = () => {
        if (this.props.pathname !== "/") {
          this.setState({ trigger: true });
        }
        if (this.props.pathname === "/edu") {
          //window.scroll(0, this.edu.current.offsetTop);
        }
      };
      check();
      this.check = setTimeout(check, 4000);
    }
  };
  render() {
    //const { posts } = this.state;
    const handleScollImgError = (e) => {
      if (e.message) {
        console.log(e.message);
        this.setState({ serviceCancelingImages: true });
      }
    };
    let arrayOfnumbers = 0;
    const scrollnum = () => {
      arrayOfnumbers = arrayOfnumbers + 1; //arrayOfnumbers[arrayOfnumbers.length - 1] + 1;
      //arrayOfnumbers.push(num);
      //console.log(arrayOfnumbers)
      return arrayOfnumbers;
    };
    const space = " ";
    /*const scrollPath = (scrollPath) =>
      [this.state.hoverPath, this.state.scrollPath].includes(scrollPath)
        ? "2px solid"
        : "0px solid";
    const hoverpathe = (ev) =>
      ev.target &&
      ev.target.href &&
      this.setState({
        hoverPath: ev.target.href.split(`${window.location.origin}/`)[1]
      });*/
    const navitem = {
      fontSize:
        this.state.width < 300
          ? "10px"
          : this.state.width < 400
          ? "10px"
          : "14px",
      width: "max-content",
      cursor: "pointer",
      padding: "4px 10px",
      color: "white"
    };
    const goTo = (path) =>
      (window.location.href = `https://${window.location.hostname}/${path.target.id}`);
    const linkyblinky = {
      color: "deepskyblue"
    };
    return (
      <div
        style={{
          width: "calc(100% - 40px)",
          margin: "10px",
          overflow: "hidden",
          fontFamily: "arial, sans serif",
          wordBreak: "break-word",
          textAlign: "left",
          maxWidth: "600px"
        }}
      >
        {/*<div
          onClick={() => {
            window.scroll(0, 100);
            this.setState({ trigger: true });
          }}
          style={{
            display: this.state.trigger ? "none" : "block",
            position: "absolute",
            height: document.documentElement.scrollHeight,
            width: "calc(100% - 40px)",
            backgroundColor: "rgba(20,20,20,.5)"
          }}
        />*/}
        {/*<div
          style={{
            display: "flex",
            backgroundColor: "green"
          }}
        >
          <div id="depression" onClick={goTo} style={navitem}>
            Depression
          </div>
          <div id="gas" onClick={goTo} style={navitem}>
            Oil
          </div>
          <div id="bachelors" onClick={goTo} style={navitem}>
            Bachelors
          </div>
          <div id="ssa" onClick={goTo} style={navitem}>
            SSA
          </div>
          <div id="supply" onClick={goTo} style={navitem}>
            S&D
          </div>
          <div id="plandemic" onClick={goTo} style={navitem}>
            Plandemic
          </div>
          <a href="https://commie.dev" style={navitem}>
            commie.dev
          </a>
        </div>*/}{" "}
        <a href="https://qr.ae/pG0Vni">Why</a>
        {space}does the government{space}
        <a href="https://qr.ae/pG0Jjo">purchase</a>
        {space}homes for us with our{space}
        <a href="https://qr.ae/pG0JjN">money</a>? Can’t we{space}
        <a href="https://qr.ae/pG0JjW">negotiate</a>?
        <Cable
          style={{ width: "100%" }}
          onError={handleScollImgError}
          img={true}
          src={
            this.state.noyout
              ? ""
              : "https://www.dropbox.com/s/7ye4z05lx3y8m4l/Screen%20Shot%202022-03-27%20at%205.51.29%20PM.png?raw=1"
          }
          float={null}
          title="https://qr.ae/pG0J3M"
          scrolling={this.state.scrolling}
          fwd={this["scrollImg" + scrollnum()]}
          scrollTopAndHeight={this.state.scrollTop + window.innerHeight}
          scrollTop={this.state.scrollTop}
        />
        <a href="https://2024nj.com/disability">
          4x 2.5m multiple sclerosis/polio all-cause nervous disease
        </a>
        .<br />
        <br />
        <a href="https://qr.ae/pG0VAl">The Federal Budget</a>
        <br />
        <br />
        No holds, ever
        <br />
        Debentures (corporate bonds can sell before default), loans (personal
        debentures can buy before default) and trust-breaking-hypocrisy for
        science rents but for
        <br />
        <span style={{ color: "purple" }}>
          *royalty% and truncated production tax geohash/month + 2 week public
          review for unilaterally known hazard tort jail contract larceny like
          foreseeable possibility or surrendered freedom to bid of labor-borne
          demand.
        </span>
        {space}$1.8t/yr debt spending, $2t currency, +$4t checking by Mortgage
        no longer fungible for, 1/4 corporate, 3/4 head of household (to pay off
        mortgage).
        <br />
        <br />
        (cash/debt)*income every year back
        <br />
        <br />
        Treasury currency inventory (transaction fee) royalty% subservient to
        customers ask-first - never inventory lessing for surrendered freedom by
        implau
        <br />
        <br />
        PCE-CPI ascertainable by employer contributions to standardized
        guarantee{space}
        <a href="https://www.bls.gov/osmr/research-papers/2017/st170010.htm">
          loss
        </a>
        , implausible use leases instead of vertical-industry max-royalty
        <br />
        <br />
        Obamacare mean inflation works because Healthcare was smaller part in
        financial-less GDP/yr, Supply is not substitutive for Demand because the
        latter is not by labor of any market, ...no quality-skew scapegoated
        <br />
        <br />
        Programmatic evidence-reviewable jail or immediate acquital. NO BAIL FOR
        ANY CRIMINAL; larceny in contract (EULA donee beneficiary){space}
        <span style={{ color: "purple" }}>included*</span>
        <br />
        <br />
        "stab, push, angry, not criminal???" Uneducated not disabled? Education
        pays, but it isn't presented for{space}
        <a href="https://2024nj.com/bachelors">work</a>
        {/**Jim Quinn */}
        <br />
        <br />
        1/hour-GDP/p economic welfare
        <br />
        do not use policy to put people to work without natural demand, that is,
        target margin operational monopsony albeit free rider mutable pipelines,
        NFC Motor Vehicle bridge tolls, and spectrum, not sewage gravity
        toilets, police and lawsits of naming and open ingredient lists by
        without bond loss profit and rather equal regressive tax for such
        service and not treasury trust breaking hypocrisy, Article 1.8 bond-tax
        equal oxymoronic and Demand for investible income compels war machine,
        contractors, subsidies or tax.
        <br />
        <br />
        income inequality used to corner the market, and real GDP is
        government+structures
      </div>
    );
  }
}
