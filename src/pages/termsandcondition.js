import Layout from '@/Components/Layout/Layout';
import React from 'react';
import back from '../assets/icon/Expand_left_light.png'
import Image from 'next/image';
import Link from 'next/link';
import TopNav from '@/Components/Navbar/TopNav';
import { lexend_exa } from '@/font';
import img from '../assets/image/pp.png'
import DesktopTopNav from '@/Components/Navbar/DesktopTopNav';

const termsandcondition = () => {
    return (
        <div className='w-full'>
            <div className='lg:hidden'>
                <TopNav />
            </div>
            <div className='pb-28' >
                <div className='lg:hidden'>
                    <div className='flex  items-center mt-5 w-full'>
                        <Link href='/profile'>
                            <div className="ps-5">
                                <Image src={back} alt="icon" />
                            </div></Link>
                        <div className='w-full text-center'>
                            <h1 className=" font-normal text-[20px]  me-5">Terms and Conditions</h1>
                        </div>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <DesktopTopNav />
                </div>
                <div className='flex flex-col lg:flex-row lg:w-full lg:justify-center lg:items-start'>
                    <div className='w-full lg:w-[60%]'>
                        <div className='hidden lg:block font-normal mt-5 lg:mx-12'> <p className='text-[40px]'>Terms and Conditions</p>
                        </div>
                        <div className='mx-5 text-justify text-[16px] font-normal lg:mx-12 mt-5 bg-[#D5D5D5] lg:text-[20px] lg:p-5'><div className={lexend_exa.className}>
                            <p>This Privacy Policy describes Our policies and procedures on the collection,

                                use and disclosure of Your information when You use the Service and tells You

                                about Your privacy rights and how the law protects You.</p>
                            <p className='mt-5'>
                                We use Your Personal data to provide and improve the Service. By using the

                                Service, You agree to the collection and use of information in accordance with

                                this Privacy Policy. .
                            </p>
                            <p className='my-3'>Interpretation and Definitions <br />======</p>
                            <p className="my-3">Interpretation   <br />--------------

                            </p>
                            <p className="mt-5">The words of which the initial letter is capitalized have meanings defined

                                under the following conditions. The following definitions shall have the same

                                meaning regardless of whether they appear in singular or in plural.</p>
                            <p className="mt-5">Definitions <br />

                                -----------</p>
                            <p className="mt-5">For the purposes of this Privacy Policy:</p>
                            <p className="mt-5">  * Account means a unique account created for You to access our Service or

                                parts of our Service.</p>
                            <p className="mt-5">  * Affiliate means an entity that controls, is controlled by or is under

                                common control with a party, where "control" means ownership of 50% or

                                more of the shares, equity interest or other securities entitled to vote

                                for election of directors or other managing authority.</p>
                            <p className="mt-5">  * Company (referred to as either "the Company", "We", "Us" or "Our" in this

                                Agreement) refers to Kalpify.</p>
                            <p className="mt-5">   * Cookies are small files that are placed on Your computer, mobile device or

                                any other device by a website, containing the details of Your browsing

                                history on that website among its many uses.</p>
                            <p className="mt-5">  * Country refers to: Delhi, India</p>
                            <p className="mt-5">
                                * Device means any device that can access the Service such as a computer, a

                                cellphone or a digital tablet.</p>
                            <p className="mt-5">  * Personal Data is any information that relates to an identified or

                                identifiable individual.</p>
                            <p className="mt-5">  * Service refers to the Website.</p>
                            <p className="mt-5">  * Service Provider means any natural or legal person who processes the data

                                on behalf of the Company. It refers to third-party companies or

                                individuals employed by the Company to facilitate the Service, to provide

                                the Service on behalf of the Company, to perform services related to the

                                Service or to assist the Company in analyzing how the Service is used.</p>
                            <p className="mt-5">
                                * Usage Data refers to data collected automatically, either generated by the

                                use of the Service or from the Service infrastructure itself (for example,

                                the duration of a page visit).</p>
                            <p className="mt-5">* Website refers to Kalpify, accessible from https://kalpify.com </p>
                            <p className="mt-5">  * You means the individual accessing or using the Service, or the company,

                                or other legal entity on behalf of which such individual is accessing or

                                using the Service, as applicable.</p>
                            <p className="mt-5">Collecting and Using Your Personal Data <br />

==============</p>
<p className="mt-5">Types of Data Collected <br />

-----------------------</p>
<p className="mt-5">Personal Data  <br />

~~~~~~~~~~~~~</p>
<p className="mt-5">While using Our Service, We may ask You to provide Us with certain personally

identifiable information that can be used to contact or identify You.

Personally identifiable information may include, but is not limited to:</p>
<p className="mt-5"> * Email address <br />



* First name and last name <br />



* Phone number <br />



* Address, State, Province, ZIP/Postal code, City <br />



* Usage Data</p>
<p className="mt-5">
Usage Data <br />

~~~~~~~~~~</p>
<p className="mt-5">Usage Data is collected automatically when using the Service.</p>
<p className="mt-5"> Usage Data may include information such as Your Device's Internet Protocol

address (e.g. IP address), browser type, browser version, the pages of our

Service that You visit, the time and date of Your visit, the time spent on

those pages, unique device identifiers and other diagnostic data.</p>
<p className="mt-5">When You access the Service by or through a mobile device, We may collect

certain information automatically, including, but not limited to, the type of

mobile device You use, Your mobile device unique ID, the IP address of Your

mobile device, Your mobile operating system, the type of mobile Internet

browser You use, unique device identifiers and other diagnostic data.</p>
<p className="mt-5">We may also collect information that Your browser sends whenever You visit our

Service or when You access the Service by or through a mobile device.</p>
<p className="mt-5">Tracking Technologies and Cookies   <br />

~~~~~~~~~~~~~~~~~~</p>
<p className="mt-5">We use Cookies and similar tracking technologies to track the activity on Our

Service and store certain information. Tracking technologies used are beacons,

tags, and scripts to collect and track information and to improve and analyze

Our Service. The technologies We use may include:

</p>
<p className="mt-5">  * Cookies or Browser Cookies. A cookie is a small file placed on Your

Device. You can instruct Your browser to refuse all Cookies or to indicate

when a Cookie is being sent. However, if You do not accept Cookies, You

may not be able to use some parts of our Service. Unless you have adjusted

Your browser setting so that it will refuse Cookies, our Service may use

Cookies. <br />

* Web Beacons. Certain sections of our Service and our emails may contain

small electronic files known as web beacons (also referred to as clear

gifs, pixel tags, and single-pixel gifs) that permit the Company, for

example, to count users who have visited those pages or opened an email

and for other related website statistics (for example, recording the

popularity of a certain section and verifying system and server

integrity).</p>
<p className="mt-5">Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on

Your personal computer or mobile device when You go offline, while Session

Cookies are deleted as soon as You close Your web browser.</p>
<p className="mt-5">We use both Session and Persistent Cookies for the purposes set out below:</p>
<p className="mt-5">  * Necessary / Essential Cookies <br />



Type: Session Cookies <br />



Administered by: Us</p>
<p className="mt-5">    Purpose: These Cookies are essential to provide You with services

available through the Website and to enable You to use some of its

features. They help to authenticate users and prevent fraudulent use of

user accounts. Without these Cookies, the services that You have asked for

cannot be provided, and We only use these Cookies to provide You with

those services.</p>
<p className="mt-5">  * Cookies Policy / Notice Acceptance Cookies <br />



Type: Persistent Cookies <br />



Administered by: Us</p>
<p className="mt-5">
    Purpose: These Cookies identify if users have accepted the use of cookies

    on the Website.</p>
<p className="mt-5">
  * Functionality Cookies <br />



    Type: Persistent Cookies <br />



    Administered by: Us</p>
<p className="mt-5">  Purpose: These Cookies allow us to remember choices You make when You use

the Website, such as remembering your login details or language

preference. The purpose of these Cookies is to provide You with a more

personal experience and to avoid You having to re-enter your preferences

every time You use the Website.</p>
<p className="mt-5">For more information about the cookies we use and your choices regarding

cookies, please visit our Cookies Policy or the Cookies section of our Privacy

Policy.</p>
<p className="mt-5">
Use of Your Personal Data <br />

-------------------</p>
<p className="mt-5">The Company may use Personal Data for the following purposes:</p>
<p className="mt-5">  * To provide and maintain our Service , including to monitor the usage of

our Service.</p>
<p className="mt-5"> * To manage Your Account: to manage Your registration as a user of the

Service. The Personal Data You provide can give You access to different

functionalities of the Service that are available to You as a registered

user.</p>
<p className="mt-5">  * For the performance of a contract: the development, compliance and

undertaking of the purchase contract for the products, items or services

You have purchased or of any other contract with Us through the Service.</p>
<p className="mt-5"> * To contact You: To contact You by email, telephone calls, SMS, or other

equivalent forms of electronic communication, such as a mobile

application's push notifications regarding updates or informative

communications related to the functionalities, products or contracted

services, including the security updates, when necessary or reasonable for

their implementation.</p>
<p className="mt-5">  * To provide You with news, special offers and general information about

other goods, services and events which we offer that are similar to those

that you have already purchased or enquired about unless You have opted

not to receive such information.

</p>
<p className="mt-5">* To manage Your requests: To attend and manage Your requests to Us.</p>
<p className="mt-5"> * For business transfers: We may use Your information to evaluate or conduct

a merger, divestiture, restructuring, reorganization, dissolution, or

other sale or transfer of some or all of Our assets, whether as a going

concern or as part of bankruptcy, liquidation, or similar proceeding, in

which Personal Data held by Us about our Service users is among the assets

transferred.</p>
<p className="mt-5">  * For other purposes : We may use Your information for other purposes, such

as data analysis, identifying usage trends, determining the effectiveness

of our promotional campaigns and to evaluate and improve our Service,

products, services, marketing and your experience.</p>
<p className="mt-5">We may share Your personal information in the following situations:</p>
<p className="mt-5">  * With Service Providers: We may share Your personal information with

Service Providers to monitor and analyze the use of our Service, to

contact You. <br />

* For business transfers: We may share or transfer Your personal information

in connection with, or during negotiations of, any merger, sale of Company

assets, financing, or acquisition of all or a portion of Our business to

another company. <br />

* With Affiliates: We may share Your information with Our affiliates, in

which case we will require those affiliates to honor this Privacy Policy.

Affiliates include Our parent company and any other subsidiaries, joint

venture partners or other companies that We control or that are under

common control with Us. <br />

* With business partners: We may share Your information with Our business

partners to offer You certain products, services or promotions. <br />

* With other users: when You share personal information or otherwise

interact in the public areas with other users, such information may be

viewed by all users and may be publicly distributed outside. <br />

* With Your consent : We may disclose Your personal information for any

other purpose with Your consent.</p>
<p className="mt-5">
Retention of Your Personal Data   <br />

---------------</p>
<p className="mt-5">The Company will retain Your Personal Data only for as long as is necessary

for the purposes set out in this Privacy Policy. We will retain and use Your

Personal Data to the extent necessary to comply with our legal obligations

(for example, if we are required to retain your data to comply with applicable

laws), resolve disputes, and enforce our legal agreements and policies.</p>
<p className="mt-5">The Company will also retain Usage Data for internal analysis purposes. Usage

Data is generally retained for a shorter period of time, except when this data

is used to strengthen the security or to improve the functionality of Our

Service, or We are legally obligated to retain this data for longer time

periods.</p>
<p className="mt-5">Transfer of Your Personal Data   <br />

---------------</p>
<p className="mt-5">Your information, including Personal Data, is processed at the Company's

operating offices and in any other places where the parties involved in the

processing are located. It means that this information may be transferred to —

and maintained on — computers located outside of Your state, province, country

or other governmental jurisdiction where the data protection laws may differ

than those from Your jurisdiction.</p>
<p className="mt-5">Your consent to this Privacy Policy followed by Your submission of such

information represents Your agreement to that transfer.</p>
<p className="mt-5">The Company will take all steps reasonably necessary to ensure that Your data

is treated securely and in accordance with this Privacy Policy and no transfer

of Your Personal Data will take place to an organization or a country unless

there are adequate controls in place including the security of Your data and

other personal information.</p>
<p className="mt-5">Delete Your Personal Data <br />

----------</p>
<p className="mt-5">You have the right to delete or request that We assist in deleting the

Personal Data that We have collected about You.</p>
<p className="mt-5">
Our Service may give You the ability to delete certain information about You

from within the Service.</p>
<p className="mt-5">You may update, amend, or delete Your information at any time by signing in to

Your Account, if you have one, and visiting the account settings section that

allows you to manage Your personal information. You may also contact Us to

request access to, correct, or delete any personal information that You have

provided to Us.</p>
<p className="mt-5">Please note, however, that We may need to retain certain information when we

have a legal obligation or lawful basis to do so.</p>
<p className="mt-5">Disclosure of Your Personal Data  <br />

------------</p>
<p className="mt-5">
Business Transactions   <br />

~~~~~~~~~~</p>
<p className="mt-5">If the Company is involved in a merger, acquisition or asset sale, Your

Personal Data may be transferred. We will provide notice before Your Personal

Data is transferred and becomes subject to a different Privacy Policy.</p>
<p className="mt-5">Law enforcement <br />

~~~~~~~~~~~~~~~</p>
<p className="mt-5">Under certain circumstances, the Company may be required to disclose Your

Personal Data if required to do so by law or in response to valid requests by

public authorities (e.g. a court or a government agency).</p>
<p className="mt-5">Other legal requirements <br />

~~~~~~~~~~~~</p>
<p className="mt-5">The Company may disclose Your Personal Data in the good faith belief that such

action is necessary to:</p>
<p className="mt-5">  * Comply with a legal obligation <br />

* Protect and defend the rights or property of the Company <br />

* Prevent or investigate possible wrongdoing in connection with the Service <br />

* Protect the personal safety of Users of the Service or the public <br />

* Protect against legal liability</p>
<p className="mt-5">Security of Your Personal Data <br />

---------------</p>
<p className="mt-5">The security of Your Personal Data is important to Us, but remember that no

method of transmission over the Internet, or method of electronic storage is

100% secure. While We strive to use commercially acceptable means to protect

Your Personal Data, We cannot guarantee its absolute security.</p>
<p className="mt-5">Children's Privacy <br />

=============</p>
<p className="mt-5">Our Service does not address anyone under the age of 13. We do not knowingly

collect personally identifiable information from anyone under the age of 13.

If You are a parent or guardian and You are aware that Your child has provided

Us with Personal Data, please contact Us. If We become aware that We have

collected Personal Data from anyone under the age of 13 without verification

of parental consent, We take steps to remove that information from Our

servers.</p>
<p className="mt-5">If We need to rely on consent as a legal basis for processing Your information

and Your country requires consent from a parent, We may require Your parent's

consent before We collect and use that information.</p>
<p className="mt-5">Links to Other Websites <br />

===========</p>
<p className="mt-5">Our Service may contain links to other websites that are not operated by Us.

If You click on a third party link, You will be directed to that third party's

site. We strongly advise You to review the Privacy Policy of every site You

visit.</p>
<p className="mt-5">We have no control over and assume no responsibility for the content, privacy

policies or practices of any third party sites or services.</p>
<p className="mt-5">Changes to this Privacy Policy <br />

===============</p>
<p className="mt-5">We may update Our Privacy Policy from time to time. We will notify You of any

changes by posting the new Privacy Policy on this page.</p>
<p className="mt-5">We will let You know via email and/or a prominent notice on Our Service, prior

to the change becoming effective and update the "Last updated" date at the top

of this Privacy Policy.</p>
<p className="mt-5">You are advised to review this Privacy Policy periodically for any changes.

Changes to this Privacy Policy are effective when they are posted on this

page.

</p>
<p className="mt-5">If you have any questions about this Privacy Policy, You can contact us:</p>
<p className="mt-5">  * By email: support@kalpify.com <br />

* By phone number: 9713931105</p>


                        </div></div>
                    </div>
                    <div className='hidden lg:block lg:w-[40%] mt-32'>
                    <div className='fixed'>
                    <Image src={img} alt='img' />
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default termsandcondition;