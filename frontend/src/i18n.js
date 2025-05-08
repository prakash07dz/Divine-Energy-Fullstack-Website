import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector) // Detects browser language
  .use(initReactI18next) // Initializes React binding
  .init({
    resources: {
      en: {
        translation: {
          welcome: "Welcome to Divine Energy",
          contactNav: "Contact Us",
          applySubsidy: "Apply for Subsidy",
          language: "Language",
          home: "Home",
          about: "About",
          servicesNav: "Services",
          subsidyNav: "Subsidy",
          productsNav: "Products",
          projectsNav: "Projects",
          testimonialsNav: "Testimonials",
          blogNav: "Blog",

          //Home Page
          hero_title: "Empowering a Brighter Tomorrow",
          hero_description:
            "Join the revolution with sustainable and affordable solar energy solutions.",
          hero_button: "Get a Free Consultation",

          // About Us Page
          about_title: "About Us",
          about_description:
            "At Divine Energy, we are dedicated to transforming the way energy is consumed. With years of expertise, we offer sustainable and efficient solar solutions for residential, commercial, and industrial sectors. Our mission is to empower every home and business with clean, renewable energy.",
          achievements: "Our Achievements",
          projects_completed: "Projects Completed",
          happy_clients: "Happy Clients",
          energy_generated: "Energy Generated (MW+)",
          industry_experience: "Industry Experience (Years)",
          why_choose_us: "Why Choose Us?",
          cutting_edge_tech: "Cutting-Edge Technology",
          cutting_edge_tech_desc:
            "We use the latest solar panel technology to maximize efficiency.",
          eco_friendly: "Eco-Friendly Solutions",
          eco_friendly_desc:
            "Our solar systems help reduce carbon footprint and save the planet.",
          cost_effective: "Cost-Effective",
          cost_effective_desc:
            "Save money on electricity bills with our affordable solar solutions.",
          expert_installation: "Expert Installation",
          expert_installation_desc:
            "Our experienced professionals ensure seamless and quick installation.",

          //Services Page
          our_services: "Our Services",
          services_intro: "We provide top-tier solar solutions to meet your energy needs.",
          residential_solar: "Residential Solar Solutions",
          residential_desc: "Power your home with clean, renewable energy and reduce your electricity bills.",
          commercial_solar: "Commercial Solar Solutions",
          commercial_desc: "Sustainable energy solutions for businesses to cut costs and boost efficiency.",
          industrial_solar: "Industrial Solar Systems",
          industrial_desc: "Large-scale solar power systems tailored for industrial operations.",
          solar_farms: "Solar Farms",
          solar_farms_desc: "Develop large-scale solar farms to generate clean and sustainable energy.",
          solar_installation: "Solar Panel Installation",
          solar_installation_desc: "Expert solar panel installation for homes, businesses, and industries.",
          maintenance_support: "Maintenance & Support",
          maintenance_support_desc: "Ongoing support and maintenance to ensure long-term efficiency.",

          // Subsidy Page
          subsidy_title: "Government Subsidy",
          subsidy_description:
            "Under the {{schemeName}}, the Indian government provides a subsidy of ₹78,000 for residential solar installations. To apply, submit the following documents:",
          scheme_name: "PM Surya Ghar Mafat Bijli Yojna",
          required_documents: "Required Documents:",
          document_list: [
            "Tax Receipt",
            "Electricity Bill",
            "Aadhar Card",
            "PAN Card",
            "Passport Photo",
            "Mobile Number",
            "Cancelled Cheque",
          ],
          benefits_title: "Benefits of Solar Energy:",
          benefits_list: [
            "Lower Electricity Bills: Reduce or eliminate energy costs.",
            "Eco-Friendly: Solar energy is clean and sustainable.",
            "Government Subsidies: Financial incentives make it more affordable.",
            "Minimal Maintenance: Solar panels last for 25+ years with low upkeep.",
            "Energy Independence: Reduce reliance on non-renewable power sources.",
          ],
          apply_button: "Apply for Subsidy",

          //Products Page
          products: {
            heading: "Our Products",
            subheading: "Explore our premium solar products designed for efficiency and sustainability.",
            solarPanels: {
              title: "Solar Panels",
              description: "High-efficiency solar panels for residential and commercial use.",
            },
            solarBatteries: {
              title: "Solar Batteries",
              description: "Advanced battery storage solutions to store solar energy efficiently.",
            },
            solarInverters: {
              title: "Solar Inverters",
              description: "Reliable inverters to convert solar energy into usable electricity.",
            },
            windTurbines: {
              title: "Wind Turbines",
              description: "Hybrid wind & solar solutions for maximizing energy production.",
            },
            solarLights: {
              title: "Solar Lights",
              description: "Eco-friendly solar lighting solutions for homes & streets.",
            },
            evCharging: {
              title: "EV Charging Stations",
              description: "Solar-powered EV charging stations for sustainable transport.",
            },
          },

          //Projects Page
          "projects": {
            "heading": "Our Projects",
            "subheading": "A glimpse into our successful solar energy installations.",
            "list": [
              {
                "title": "Residential Solar Rooftop",
                "description": "Installed high-efficiency solar panels for homes, reducing electricity bills significantly."
              },
              {
                "title": "Commercial Solar Solutions",
                "description": "Implemented solar solutions for offices, helping businesses adopt sustainable energy."
              },
              {
                "title": "Industrial Solar Plants",
                "description": "Large-scale solar energy setups for factories, cutting energy costs and emissions."
              },
              {
                "title": "Solar Farm Projects",
                "description": "Developed solar farms to generate clean energy for communities and industries."
              }
            ]
          },

          //Testimonial Page
          "testimonials": {
            "heading": "Our Clients",
            "subheading": "Hear from our satisfied customers about their solar journey.",
            "list": [
              {
                "name": "Amit Sharma",
                "review": "Divine Energy transformed my home with solar power. My electricity bill has reduced drastically!"
              },
              {
                "name": "Raj Verma",
                "review": "Excellent service and high-quality solar panels. The installation was smooth and efficient."
              },
              {
                "name": "Rajesh Kumar",
                "review": "The best decision I made! Now my business is powered by clean and sustainable solar energy."
              }
            ]
          },

          //Blog Page
          "blog": {
            "heading": "Latest Blogs",
            "subheading": "Stay informed with the latest news and trends in solar energy.",
            "read_more": "Read More",
            "read_more_blogs": "Read More Blogs"
          },

          //Contact Page
          "contact": {
            "heading": "Get in Touch",
            "subheading": "Have questions? Reach out to us!",
            "phone": "Phone",
            "email": "Email",
            "location": "Location",
            "form_title": "Send Us a Message",
            "name": "Name",
            "name_placeholder": "Enter your name",
            "mobile": "Mobile Number",
            "mobile_placeholder": "Enter your mobile number",
            "message": "Message",
            "message_placeholder": "Enter your message",
            "submit": "Send Message",
            "alert": "Please fill in all fields.",
            "success": "Your message has been sent successfully!"
          },

          //Footer Section
          "footer": {
            "company_name": "Divine Energy",
            "description": "Empowering a sustainable future with clean and affordable solar energy solutions.",
            "quick_links": "Quick Links",
            "about_us": "About Us",
            "services": "Services",
            "products": "Products",
            "projects": "Projects",
            "contact": "Contact",
            "follow_us": "Follow Us",
            "admin_login": "Admin Login",
            "copyright": "© {{year}} Divine Energy. All Rights Reserved.",
            "made_by": "Made by",
            "developer_name": "Prakash Parmar"
          },

          //ApplySubsidy Form
          "subsidy": {
            "title": "Apply for Government Subsidy",
            "full_name": "Full Name",
            "mobile_number": "Mobile Number",
            "documents": {
              "aadharCard": "Aadhar Card",
              "panCard": "PAN Card",
              "electricityBill": "Electricity Bill",
              "cancelledCheque": "Cancelled Cheque",
              "taxReceipt": "Tax Receipt",
              "passportPhoto": "Passport Photo"
            },
            "choose_file": "Choose File",
            "submit": "Submit Application",
            "upload_success": "Documents uploaded successfully",
            "upload_error": "Failed to upload documents"
          }
        }
      },
      hi: {
        translation: {
          welcome: "डिवाइन एनर्जी में आपका स्वागत है",
          contactNav: "संपर्क करें",
          applySubsidy: "सब्सिडी के लिए आवेदन करें",
          language: "भाषा",
          home: "होम",
          about: "हमारे बारे में",
          servicesNav: "सेवाएं",
          subsidyNav: "सब्सिडी",
          productsNav: "उत्पाद",
          projectsNav: "परियोजनाएं",
          testimonialsNav: "प्रशंसापत्र",
          blogNav: "ब्लॉग",

          //Home Page
          hero_title: "एक उज्जवल कल के लिए सशक्तिकरण",
          hero_description:
            "सतत और किफायती सौर ऊर्जा समाधानों के साथ क्रांति में शामिल हों।",
          hero_button: "नि:शुल्क परामर्श प्राप्त करें",

          // About Us Page
          about_title: "हमारे बारे में",
          about_description:
            "डिवाइन एनर्जी में, हम ऊर्जा खपत के तरीके को बदलने के लिए समर्पित हैं। वर्षों के अनुभव के साथ, हम आवासीय, वाणिज्यिक और औद्योगिक क्षेत्रों के लिए स्थायी और कुशल सौर समाधान प्रदान करते हैं। हमारा मिशन हर घर और व्यवसाय को स्वच्छ, नवीकरणीय ऊर्जा से सशक्त बनाना है।",
          achievements: "हमारी उपलब्धियां",
          projects_completed: "पूरा किए गए प्रोजेक्ट",
          happy_clients: "खुश ग्राहक",
          energy_generated: "उत्पन्न ऊर्जा (MW+)",
          industry_experience: "उद्योग अनुभव (वर्ष)",
          why_choose_us: "हमें क्यों चुनें?",
          cutting_edge_tech: "अत्याधुनिक तकनीक",
          cutting_edge_tech_desc:
            "हम दक्षता को अधिकतम करने के लिए नवीनतम सौर पैनल तकनीक का उपयोग करते हैं।",
          eco_friendly: "पर्यावरण-अनुकूल समाधान",
          eco_friendly_desc:
            "हमारी सौर प्रणाली कार्बन फुटप्रिंट को कम करने और ग्रह को बचाने में मदद करती है।",
          cost_effective: "लागत प्रभावी",
          cost_effective_desc:
            "हमारे किफायती सौर समाधानों के साथ बिजली के बिलों पर पैसे बचाएं।",
          expert_installation: "विशेषज्ञ स्थापना",
          expert_installation_desc:
            "हमारे अनुभवी पेशेवर निर्बाध और त्वरित स्थापना सुनिश्चित करते हैं।",

          //Services Page
          our_services: "हमारी सेवाएं",
          services_intro: "हम आपकी ऊर्जा आवश्यकताओं को पूरा करने के लिए उच्च स्तरीय सौर समाधान प्रदान करते हैं।",
          residential_solar: "आवासीय सौर समाधान",
          residential_desc: "स्वच्छ, नवीकरणीय ऊर्जा से अपने घर को सशक्त बनाएं और बिजली के बिलों को कम करें।",
          commercial_solar: "व्यावसायिक सौर समाधान",
          commercial_desc: "लागत में कटौती और दक्षता बढ़ाने के लिए व्यवसायों के लिए स्थायी ऊर्जा समाधान।",
          industrial_solar: "औद्योगिक सौर प्रणालियाँ",
          industrial_desc: "औद्योगिक संचालन के लिए बड़े पैमाने पर सौर ऊर्जा प्रणाली।",
          solar_farms: "सौर फार्म",
          solar_farms_desc: "स्वच्छ और सतत ऊर्जा उत्पन्न करने के लिए बड़े पैमाने पर सौर फार्म विकसित करें।",
          solar_installation: "सौर पैनल स्थापना",
          solar_installation_desc: "घरों, व्यवसायों और उद्योगों के लिए विशेषज्ञ सौर पैनल स्थापना।",
          maintenance_support: "रखरखाव और समर्थन",
          maintenance_support_desc: "दीर्घकालिक दक्षता सुनिश्चित करने के लिए निरंतर समर्थन और रखरखाव।",

          // Subsidy Page
          subsidy_title: "सरकारी सब्सिडी",
          subsidy_description:
            "{{schemeName}} के तहत, भारत सरकार ₹78,000 की सब्सिडी प्रदान करती है। आवेदन करने के लिए निम्नलिखित दस्तावेज़ जमा करें:",
          scheme_name: "पीएम सूर्य घर मुफ्त बिजली योजना",
          required_documents: "आवश्यक दस्तावेज़:",
          document_list: [
            "कर रसीद",
            "बिजली बिल",
            "आधार कार्ड",
            "पैन कार्ड",
            "पासपोर्ट फोटो",
            "मोबाइल नंबर",
            "रद्द चेक",
          ],
          benefits_title: "सौर ऊर्जा के लाभ:",
          benefits_list: [
            "कम बिजली बिल: ऊर्जा लागत को कम या समाप्त करें।",
            "पर्यावरण-अनुकूल: सौर ऊर्जा स्वच्छ और टिकाऊ है।",
            "सरकारी सब्सिडी: वित्तीय प्रोत्साहन इसे और अधिक किफायती बनाते हैं।",
            "न्यूनतम रखरखाव: सौर पैनल 25+ वर्षों तक चलते हैं।",
            "ऊर्जा स्वतंत्रता: गैर-नवीकरणीय ऊर्जा स्रोतों पर निर्भरता कम करें।",
          ],
          apply_button: "सब्सिडी के लिए आवेदन करें",

          //Products Page
          products: {
            heading: "हमारे उत्पाद",
            subheading: "दक्षता और स्थिरता के लिए डिज़ाइन किए गए हमारे प्रीमियम सौर उत्पादों का अन्वेषण करें।",
            solarPanels: {
              title: "सौर पैनल",
              description: "आवासीय और वाणिज्यिक उपयोग के लिए उच्च-दक्षता वाले सौर पैनल।",
            },
            solarBatteries: {
              title: "सौर बैटरियाँ",
              description: "सौर ऊर्जा को कुशलता से संग्रहीत करने के लिए उन्नत बैटरी भंडारण समाधान।",
            },
            solarInverters: {
              title: "सौर इन्वर्टर",
              description: "सौर ऊर्जा को उपयोगी बिजली में बदलने के लिए विश्वसनीय इन्वर्टर।",
            },
            windTurbines: {
              title: "विंड टर्बाइन",
              description: "ऊर्जा उत्पादन को अधिकतम करने के लिए हाइब्रिड पवन और सौर समाधान।",
            },
            solarLights: {
              title: "सौर लाइट्स",
              description: "घरों और सड़कों के लिए पर्यावरण के अनुकूल सौर प्रकाश समाधान।",
            },
            evCharging: {
              title: "ईवी चार्जिंग स्टेशन",
              description: "स्थायी परिवहन के लिए सौर ऊर्जा से चलने वाले ईवी चार्जिंग स्टेशन।",
            },
          },

          //Projects Page
          "projects": {
            "heading": "हमारे प्रोजेक्ट्स",
            "subheading": "हमारी सफल सौर ऊर्जा स्थापनाओं की एक झलक।",
            "list": [
              {
                "title": "आवासीय सौर रूफटॉप",
                "description": "घरों के लिए उच्च दक्षता वाले सौर पैनल स्थापित किए, जिससे बिजली बिल में महत्वपूर्ण कमी आई।"
              },
              {
                "title": "व्यावसायिक सौर समाधान",
                "description": "कार्यालयों के लिए सौर समाधान लागू किए, जिससे व्यवसायों को स्थायी ऊर्जा अपनाने में मदद मिली।"
              },
              {
                "title": "औद्योगिक सौर संयंत्र",
                "description": "कारखानों के लिए बड़े पैमाने पर सौर ऊर्जा सेटअप, जिससे ऊर्जा लागत और उत्सर्जन में कमी आई।"
              },
              {
                "title": "सौर फार्म प्रोजेक्ट्स",
                "description": "समुदायों और उद्योगों के लिए स्वच्छ ऊर्जा उत्पन्न करने के लिए सौर फार्म विकसित किए।"
              }
            ]
          },

          //Testimonial Page
          "testimonials": {
            "heading": "हमारे ग्राहक",
            "subheading": "सुनें कि हमारे संतुष्ट ग्राहक अपनी सौर यात्रा के बारे में क्या कहते हैं।",
            "list": [
              {
                "name": "अमित शर्मा",
                "review": "डेविन एनर्जी ने मेरे घर को सौर ऊर्जा से बदल दिया। मेरा बिजली बिल काफी हद तक कम हो गया है!"
              },
              {
                "name": "राज वर्मा",
                "review": "उत्कृष्ट सेवा और उच्च गुणवत्ता वाले सौर पैनल। स्थापना सहज और कुशल थी।"
              },
              {
                "name": "राजेश कुमार",
                "review": "यह सबसे अच्छा निर्णय था जो मैंने लिया! अब मेरा व्यवसाय स्वच्छ और सतत सौर ऊर्जा से संचालित होता है।"
              }
            ]
          },

          //Blog Page
          "blog": {
            "heading": "नवीनतम ब्लॉग",
            "subheading": "सौर ऊर्जा से जुड़ी नवीनतम खबरों और रुझानों से अपडेट रहें।",
            "read_more": "अधिक पढ़ें",
            "read_more_blogs": "अधिक ब्लॉग पढ़ें"
          },

          //Contact Page
          "contact": {
            "heading": "संपर्क करें",
            "subheading": "कोई सवाल है? हमसे संपर्क करें!",
            "phone": "फोन",
            "email": "ईमेल",
            "location": "स्थान",
            "form_title": "हमें संदेश भेजें",
            "name": "नाम",
            "name_placeholder": "अपना नाम दर्ज करें",
            "mobile": "मोबाइल नंबर",
            "mobile_placeholder": "अपना मोबाइल नंबर दर्ज करें",
            "message": "संदेश",
            "message_placeholder": "अपना संदेश दर्ज करें",
            "submit": "संदेश भेजें",
            "alert": "कृपया सभी फ़ील्ड भरें।",
            "success": "आपका संदेश सफलतापूर्वक भेज दिया गया है!"
          },

          //Footer Section
          "footer": {
            "company_name": "डिवाइन एनर्जी",
            "description": "स्वच्छ और सस्ती सौर ऊर्जा समाधान के साथ एक स्थायी भविष्य को सशक्त बनाना।",
            "quick_links": "त्वरित लिंक",
            "about_us": "हमारे बारे में",
            "services": "सेवाएं",
            "products": "उत्पाद",
            "projects": "परियोजनाएँ",
            "contact": "संपर्क करें",
            "follow_us": "हमें फॉलो करें",
            "admin_login": "प्रशासन लॉगिन",
            "copyright": "© {{year}} डिवाइन एनर्जी। सर्वाधिकार सुरक्षित।",
            "made_by": "द्वारा बनाया गया",
            "developer_name": "प्रकाश परमार"
          },

          //ApplySubsidy Form
          "subsidy": {
            "title": "सरकारी सब्सिडी के लिए आवेदन करें",
            "full_name": "पूरा नाम",
            "mobile_number": "मोबाइल नंबर",
            "documents": {
              "aadharCard": "आधार कार्ड",
              "panCard": "पैन कार्ड",
              "electricityBill": "बिजली बिल",
              "cancelledCheque": "रद्द चेक",
              "taxReceipt": "कर रसीद",
              "passportPhoto": "पासपोर्ट फोटो"
            },
            "choose_file": "फ़ाइल चुनें",
            "submit": "आवेदन जमा करें",
            "upload_success": "दस्तावेज़ सफलतापूर्वक अपलोड किए गए",
            "upload_error": "दस्तावेज़ अपलोड करने में विफल"
          }
        }
      },
      gu: {
        translation: {
          welcome: "ડીવાઇન એનર્જીમાં આપનું સ્વાગત છે",
          contactNav: "સંપર્ક કરો",
          applySubsidy: "સબસિડી માટે અરજી કરો",
          language: "ભાષા",
          home: "હોમ",
          about: "અમારા વિશે",
          servicesNav: "સેવા",
          subsidyNav: "સબસિડી",
          productsNav: "ઉત્પાદનો",
          projectsNav: "પ્રોજેક્ટ્સ",
          testimonialsNav: "પ્રશંસાપત્ર",
          blogNav: "બ્લોગ",

          //Home page
          hero_title: "એક તેજસ્વી આવતીકાલ માટે શક્તિ આપવી",
          hero_description:
            "સોલાર પાવર સાથે, ઊર્જાની બચત કરો અને પૃથ્વીને બચાવો",
          hero_button: "મફત સલાહ મેળવો",

          // About Us Page
          about_title: "અમારા વિશે",
          about_description:
            "ડીવાઇન એનર્જી એ ઊર્જા વપરાશને બદલીને ટકાઉ અને કાર્યક્ષમ સોલાર સોલ્યુશન ઓફર કરવામાં સમર્પિત છે. ઘણા વર્ષોના અનુભવી સાથે, અમે રહેણીકર, વ્યાવસાયિક અને ઉદ્યોગ ક્ષેત્ર માટે સોલાર ઉકેલ પ્રદાન કરીએ છીએ. અમારું મિશન દરેક ઘર અને બિઝનેસને સ્વચ્છ, પુનઃનવિનીકરણશીલ ઊર્જાથી સશક્ત બનાવવું છે.",
          achievements: "અમારી સિદ્ધિઓ",
          projects_completed: "પૂરા થયેલ પ્રોજેક્ટ",
          happy_clients: "સંતોષિત ગ્રાહકો",
          energy_generated: "ઉત્પાદિત ઊર્જા (MW+)",
          industry_experience: "ઉદ્યોગ અનુભવ (વર્ષ)",
          why_choose_us: "અમને કેમ પસંદ કરો?",
          cutting_edge_tech: "અદ્યતન ટેકનોલોજી",
          cutting_edge_tech_desc:
            "અમે કાર્યક્ષમતાને વધુમાં વધુ કરવા માટે નવીનતમ સોલાર પેનલ ટેકનોલોજીનો ઉપયોગ કરીએ છીએ.",
          eco_friendly: "પર્યાવરણ અનુકૂળ ઉકેલ",
          eco_friendly_desc:
            "અમારી સોલાર સિસ્ટમ કાર્બન ફૂટપ્રિન્ટ ઘટાડવામાં અને પૃથ્વીને બચાવવામાં સહાય કરે છે.",
          cost_effective: "કિફાયતી ઉકેલ",
          cost_effective_desc:
            "અમારા સસ્તા સોલાર ઉકેલો સાથે વીજળીના બિલમાં બચત કરો.",
          expert_installation: "નિષ્ણાત સ્થાપના",
          expert_installation_desc:
            "અમારા અનુભવી વ્યાવસાયિકો ઝડપી અને સરળ સ્થાપન સુનિશ્ચિત કરે છે.",

          //Services Page
          our_services: "અમારી સેવાઓ",
          services_intro: "અમે તમારી ઊર્જાની જરૂરિયાતોને પૂર્ણ કરવા માટે ઉચ્ચતમ સ્તરના સોલાર ઉકેલો પ્રદાન કરીએ છીએ.",
          residential_solar: "રહેણીકર સોલાર ઉકેલ",
          residential_desc: "તમારા ઘરને સ્વચ્છ, પુનઃનવિનીકરણશીલ ઊર્જા સાથે શક્તિશાળી બનાવો અને વીજળીના બિલમાં બચત કરો.",
          commercial_solar: "વ્યાવસાયિક સોલાર ઉકેલ",
          commercial_desc: "ખર્ચ ઘટાડવા અને કાર્યક્ષમતા વધારવા માટે વ્યવસાયો માટે ટકાઉ ઊર્જા ઉકેલો.",
          industrial_solar: "ઉદ્યોગ સોલાર સિસ્ટમ",
          industrial_desc: "ઉદ્યોગોની જરૂરિયાત મુજબ વિશિષ્ટ મોટા પાયે સોલાર ઉકેલ.",
          solar_farms: "સોલાર ફાર્મ",
          solar_farms_desc: "સ્વચ્છ અને ટકાઉ ઊર્જા ઉત્પન્ન કરવા માટે મોટા પાયે સોલાર ફાર્મ વિકસાવો.",
          solar_installation: "સોલાર પેનલ સ્થાપન",
          solar_installation_desc: "ઘરો, બિઝનેસ અને ઉદ્યોગો માટે નિષ્ણાત સોલાર પેનલ સ્થાપન.",
          maintenance_support: "જાળવણી અને સપોર્ટ",
          maintenance_support_desc: "લાંબા ગાળાની કાર્યક્ષમતા માટે ચાલુ સપોર્ટ અને જાળવણી.",

          // Subsidy Page
          subsidy_title: "સરકારી સબસિડી",
          subsidy_description:
            "{{schemeName}} હેઠળ, ભારતીય સરકાર ₹78,000 ની સબસિડી પ્રદાન કરે છે. અરજી કરવા માટે નીચેના દસ્તાવેજો રજૂ કરો:",
          scheme_name: "પીએમ સુર્ય ઘર મફત વીજળી યોજના",
          required_documents: "જરૂરી દસ્તાવેજો:",
          document_list: [
            "વેરા પાવતી",
            "લાઇટબીલ",
            "આધાર કાર્ડ",
            "પાન કાર્ડ",
            "પાસપોર્ટ ફોટો",
            "મોબાઇલ નંબર",
            "કેન્સલ ચેક",
          ],
          benefits_title: "સૌર ઊર્જાના લાભો:",
          benefits_list: [
            "ઓછા વીજળી બિલ: ઉર્જા ખર્ચ ઘટાડો અથવા દૂર કરો.",
            "પર્યાવરણમિત્ર: સૌર ઊર્જા સ્વચ્છ અને ટકાઉ છે.",
            "સરકારી સબસિડી: આર્થિક પ્રોત્સાહન તેને વધુ પરવડી શકે તેવું બનાવે છે.",
            "ન્યુનતમ જાળવણી: સૌર પેનલ્સ 25+ વર્ષ સુધી ચાલે છે.",
            "ઊર્જા સ્વતંત્રતા: અ-નવિનવલીકરણશીલ ઊર્જા સ્ત્રોતો પર આધાર ઘટાડો.",
          ],
          apply_button: "સબસિડી માટે અરજી કરો",

          //Products Page
          products: {
            heading: "અમારા ઉત્પાદનો",
            subheading: "દક્ષતા અને સ્થિરતા માટે ડિઝાઇન કરાયેલ અમારા પ્રીમિયમ સોલર ઉત્પાદનોની શોધ કરો.",
            solarPanels: {
              title: "સોલર પેનલ્સ",
              description: "રહેણાંક અને વાણિજ્યિક ઉપયોગ માટે ઉચ્ચ-દક્ષતા ધરાવતા સોલર પેનલ્સ.",
            },
            solarBatteries: {
              title: "સોલર બેટરી",
              description: "સોલર ઊર્જાને કાર્યક્ષમ રીતે સંગ્રહિત કરવા માટે અદ્યતન બેટરી સ્ટોરેજ સોલ્યુશન્સ.",
            },
            solarInverters: {
              title: "સોલર ઇન્વર્ટર્સ",
              description: "સોલર ઊર્જાને ઉપયોગી વીજળીમાં રૂપાંતરિત કરવા માટે વિશ્વસનીય ઇન્વર્ટર્સ.",
            },
            windTurbines: {
              title: "પવન ટર્બાઇન્સ",
              description: "ઊર્જા ઉત્પાદનને મહત્તમ કરવા માટે હાઇબ્રિડ પવન અને સોલર સોલ્યુશન્સ.",
            },
            solarLights: {
              title: "સોલર લાઇટ્સ",
              description: "ઘરો અને શેરીઓ માટે પર્યાવરણને અનુકૂળ સોલર લાઇટિંગ સોલ્યુશન્સ.",
            },
            evCharging: {
              title: "ઇવી ચાર્જિંગ સ્ટેશન્સ",
              description: "ટકાઉ પરિવહન માટે સોલર-પાવર્ડ ઇવી ચાર્જિંગ સ્ટેશન્સ.",
            },
          },

          //Projects Page
          "projects": {
            "heading": "અમારા પ્રોજેક્ટ્સ",
            "subheading": "અમારી સફળ સૌર ઊર્જા સ્થાપનાઓની એક ઝલક.",
            "list": [
              {
                "title": "રહેણાંક સૌર રૂફટોપ",
                "description": "ઘર માટે ઉચ્ચ કાર્યક્ષમતા ધરાવતા સૌર પેનલ સ્થાપિત કર્યા, જેનાથી વીજળીના બિલમાં નોંધપાત્ર ઘટાડો થયો."
              },
              {
                "title": "વાણિજ્યિક સૌર ઉકેલ",
                "description": "ઓફિસ માટે સૌર ઉકેલો અમલમાં મૂક્યા, જેનાથી વ્યાપારોને સ્થિર ઊર્જા અપનાવવા માટે મદદ મળી."
              },
              {
                "title": "ઔદ્યોગિક સૌર પ્લાન્ટ",
                "description": "ફેક્ટરીઓ માટે મોટા પાયે સૌર ઊર્જા સેટઅપ, જેનાથી ઊર્જા ખર્ચ અને ઉત્સર્જનમાં ઘટાડો થયો."
              },
              {
                "title": "સૌર ફાર્મ પ્રોજેક્ટ્સ",
                "description": "સમુદાયો અને ઉદ્યોગો માટે સ્વચ્છ ઊર્જા પેદા કરવા માટે સૌર ફાર્મ વિકસિત કર્યા."
              }
            ]
          },

          //Testimonial Page
          "testimonials": {
            "heading": "અમારા ગ્રાહકો",
            "subheading": "આગળ જુઓ કે અમારા સંતોષિત ગ્રાહકો તેમની સોલાર યાત્રા વિશે શું કહે છે.",
            "list": [
              {
                "name": "અમિત શર્મા",
                "review": "ડિવાઇન એનર્જીએ મારા ઘરને સોલાર પાવર સાથે પરિવર્તિત કર્યું. મારી વીજળીની બિલ ઘણો ઓછો થયો છે!"
              },
              {
                "name": "રાજ વર્મા",
                "review": "ઉત્કૃષ્ટ સેવા અને ઉચ્ચ ગુણવત્તાવાળા સોલાર પેનલ. સ્થાપન સરળ અને કાર્યક્ષમ હતું."
              },
              {
                "name": "રાજેશ કુમાર",
                "review": "આ મારા માટે શ્રેષ્ઠ નિર્ણય હતો! હવે મારા વ્યવસાયને સ્વચ્છ અને ટકાઉ સોલાર એનર્જીથી શક્તિ મળે છે."
              }
            ]
          },

          //Blog Page
          "blog": {
            "heading": "નવીનતમ બ્લોગ્સ",
            "subheading": "સોલાર એનર્જી વિશેની નવીનતમ સમાચાર અને પ્રવૃત્તિઓથી માહિતગાર રહો",
            "read_more": "વધુ વાંચો",
            "read_more_blogs": "વધુ બ્લોગ્સ વાંચો"
          },

          //Contact Page
          "contact": {
            "heading": "સંપર્ક કરો",
            "subheading": "શું તમને કોઈ પ્રશ્ન છે? અમારો સંપર્ક કરો!",
            "phone": "ફોન",
            "email": "ઇમેઇલ",
            "location": "સ્થાન",
            "form_title": "અમને સંદેશ મોકલો",
            "name": "નામ",
            "name_placeholder": "તમારું નામ દાખલ કરો",
            "mobile": "મોબાઈલ નંબર",
            "mobile_placeholder": "તમારો મોબાઈલ નંબર દાખલ કરો",
            "message": "સંદેશ",
            "message_placeholder": "તમારો સંદેશ દાખલ કરો",
            "submit": "સંદેશ મોકલો",
            "alert": "કૃપા કરીને તમામ ફીલ્ડ્સ ભરો.",
            "success": "તમારો સંદેશ સફળતાપૂર્વક મોકલાયો છે!"
          },

          //Footer Section
          "footer": {
            "company_name": "દિવાઇન એનર્જી",
            "description": "સ્વચ્છ અને સસ્તા સોલાર એનર્જી ઉકેલોથી એક ટકાઉ ભવિષ્યને સશક્ત બનાવવું.",
            "quick_links": "ઝડપી લિંક",
            "about_us": "અમારા વિશે",
            "services": "સેવાઓ",
            "products": "ઉત્પાદનો",
            "projects": "પ્રોજેક્ટ્સ",
            "contact": "સંપર્ક કરો",
            "follow_us": "અમને અનુસરો",
            "admin_login": "એડમિન લૉગિન",
            "copyright": "© {{year}} દિવાઇન એનર્જી. બધા હક્કો સંવર્ણિત.",
            "made_by": "બનાવનાર",
            "developer_name": "પ્રકાશ પરમાર"
          },

          //ApplySubsidy Form
          "subsidy": {
            "title": "સરકારી સબસિડી માટે અરજી કરો",
            "full_name": "પૂરું નામ",
            "mobile_number": "મોબાઇલ નંબર",
            "documents": {
              "aadharCard": "આધાર કાર્ડ",
              "panCard": "પાન કાર્ડ",
              "electricityBill": "લાઇટબીલ",
              "cancelledCheque": "કેન્સલ ચેક",
              "taxReceipt": "વેરા પાવતી",
              "passportPhoto": "પાસપોર્ટ ફોટો"
            },
            "choose_file": "ફાઇલ પસંદ કરો",
            "submit": "અરજી સબમિટ કરો",
            "upload_success": "દસ્તાવેજો સફળતાપૂર્વક અપલોડ થયા",
            "upload_error": "દસ્તાવેજો અપલોડ કરવામાં નિષ્ફળ"
          }
        }
      },
    },
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: { escapeValue: false },
  });

export default i18n;
