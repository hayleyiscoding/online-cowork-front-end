import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

export default function HowItWorks() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Online CoWork FAQ</title>
        <meta
          name="description"
          content="The virtual office for women who work online"
        />
      </Head>
      <section className="py-12 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Frequently Asked Questions
            </h2>
            <p className="max-w-lg mx-auto mt-6 text-base text-gray-600 font-pj">
              Hi Online CoWorker! We are so excited that you're here.💚 Below
              you'll find some answers to our most frequently asked questions!
            </p>
          </div>

          <div className="grid max-w-5xl grid-cols-1 mx-auto mt-10 sm:mt-20 md:grid-cols-2 md:gap-x-16 gap-y-8 md:gap-y-12">
            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Why are you using blockchain technology for this?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                There are a few reasons for this! Firstly, Blockchain technology
                provides an amazing way for us to create a lottery that is
                completely automated and completely fair as it is free of human
                interference. Secondly, online payment systems such as Paypal
                are limited in many countries. Blockchain technology provides a
                way for payments to be made without the need of a third party
                such as a bank or credit union. Thirdly, many people associate
                blockchain technology with crypto scams. By building the Online
                CoWork lottery with blockchain technology, we aim to show how
                useful this technology can be and how it can be used for good to
                improve the lives of people around the world.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Who is this lottery aimed at?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                This lottery is aimed at helping women and non-binary people
                with online businesses from around the world (including remote
                workers!). People who work online from home, coffee shops and
                co-working spaces! We are talking about virtual assistants,
                social media managers, bloggers, YouTubers, online yoga
                instructors, Etsy and Amazon sellers, influencers, software
                developers, online lawyers, online accountants, etc!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                That all sounds good, but will I get my 1 MATIC back if I
                complete each task?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                We did consider this as an option when creating the platform.
                However, it is impossible for us to know if you actually
                completed your task or not. If all users "complete" their tasks,
                this would mean that there would be no money to giveaway in the
                lottery. Having said this, if you know that you won't be getting
                your money back, this provides extra accountability for you to
                commit to getting your task done. So by participating, you
                benefit in 2 ways - you receive extra accountability to get your
                task done AND you get a lottery ticket for the chance to win
                funds for your business! 🥳
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Why did you come up with this idea?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                If you earn money online, it means you likely have tasks to
                complete - and you probably wouldn't mind some pocket money to
                fund your business or to further your education through online
                courses! This is where the lottery comes in. It aims to help you
                with 2 common issues that plague women with online businesses -
                productivity and funding.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                But do I have to be a women/non-binary person to participate?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                The Online CoWork lottery is aimed at helping women and
                non-binary people specifically - as this is a demographic that
                has historically been marginalized. However, we didn't create
                Online CoWork to discriminate based on gender! If you don't
                identify as female/non-binary, you are welcome to participate if
                you feel that our platform could be of use to you!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Will you let us know if we've won?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                Unfortunately, as crypto wallets do not have identity associated
                with them, we are unable to let you know - you would need to go
                into your wallet every now and again to check!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Ok, so what are the exact steps?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                1) Join the free Online CoWork Discord community and make sure
                that you are verified by completing the application form inside
                the community. In order to try to limit spammers, only 'Online
                CoWorkers' who are verified may take part in the lottery.
                <br />
                <br />
                2) Make sure that you have a free crypto wallet and that it has
                a few MATIC coins in it (more on this later!).
                <br />
                <br />
                3) Connect your wallet on the home page (make sure that it is on
                the Polygon Network) and you'll see a box where you can add a
                task that you've been procrastination about. Type your task into
                the box and push the button to "Get it done!".
                <br />
                <br />
                4) When you push the button, your wallet will pop up and you'll
                be asked to confirm the transaction. It costs 1 MATIC (approx.
                USD 1) to add one task. But you can see the current price of
                MATIC by clicking here. You will also need to pay a 'gas fee'
                for the transaction which is usually less than $0.01c.
                <br />
                <br />
                5) Once the transaction has been confirmed, you should see it
                appear in the task feed below the form. Now go, go go - get your
                task done!
                <br />
                <br />
                6) Every task you add acts as a "lottery ticket" where you'll be
                entered into a weekly draw. The more tasks you add, the more
                entries you get into the lottery!
                <br />
                <br />
                7) The 1 MATIC that each person pays for each task gets pooled
                together to create the lottery "winnings". These winnings will
                be distributed to one random "Online CoWorker" every 7 days to
                provide funding for their online business - to pay for things
                such as website hosting, shopify fees, etc. Or alternatively, if
                the Online CoWorker doesn't have an online business, it could be
                used to pay for educational courses for professional/personal
                development - but it's up to you! The money is yours to use for
                anything that would help you to move forwards in your life.
                <br />
                <br />
                8) The lottery prize will be reset each week.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Ok, I'm intrigued! So, how do I go about getting a free wallet
                and loading it with MATIC?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                1) There are many different kinds of crypto wallets - but the
                easiest is probably Metamask. All you do it sign up (2 minutes!)
                and it is added as a Chrome extension in your browser. Visit
                Metamask.io and follow the steps to sign up.
                <br />
                <br />
                2) Once you have a metamask wallet, you would need to make sure
                that you have added the "Polygon" network. Please see steps here
                on how to do this.
                <br />
                <br />
                3) Now, you need to load your wallet with MATIC coins. You can
                do this many ways - through exchanges like Binance or Coinbase -
                or you could buy Matic directly with your debit/credit card by
                visiting this link for Moonpay.
                <br />
                <br />
                4) Note: Each wallet charges a fee for exchanging regular
                currency (called 'fiat' - AUD, USD, etc) into crypto. And you
                will be charged again when you convert your crypto back to fiat
                currency. This fee can range from 1 to 3% - please check the
                fees for your personal wallet provider.
                <br />
                <br />
                5) Something important to note about Metamask is that it is not
                like a bank that you can call if you have problems. You are
                fully in charge of the account. When you open the account, you
                will be given a secret phrase. This secret phrase can be used by
                anyone to access your account. And if you lose the secret
                phrase, you will lose access to your funds in Metamask forever.
                So it is important to keep your secret phrase safe. Write it on
                paper, put it in a ziploc bag and put it in a safe place - or
                even in a few safe places. If you are not comfortable with the
                idea of looking after your secret phrase, we recently learned
                about a wallet called ZenGo which you can download on your
                phone. You can follow their instructions to connect your ZenGo
                wallet to Online CoWork using "Wallet Connect". For those who
                are new to crypto, we recommend ZenGo as the easiest and most
                secure option, however we have no affiliation with ZenGo and
                this is not an endorsement of them - please do your own
                research!
                <br />
                <br />
                6) If you have any problems or if you would like someone to help
                you through this process, please feel free to email us at info
                (@) onlinecowork.com. We provide an onboarding service for an
                extra fee to help you to get set up.
                <br />
                <br />
                7) Please also keep in mind that metamask is not fully
                "hack-proof" - therefore please do not store large amounts of
                money in metamask. You may wish to purchase cold storage or use
                ZenGo as it claims to likely be even better than cold storage!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                I love what you're doing and I'd like to donate to the lottery
                directly. How do I do this?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                That's amazing! We appreciate you! On the home page, you'll see
                a button to donate directly to that week's lottery.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                I love what you're doing and I'd like to donate to the lottery
                directly. How do I do this?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                That's amazing! We appreciate you! On the home page, you'll see
                a button to donate directly to that week's lottery.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                If I win the lottery, do I need to pay tax on my winnings?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                Unfortunately, we cannot give any tax advice. But as it is
                income, please contact your accountant for advice about your
                individual tax circumstances.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                How did you come up with this idea?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                kjhdflew
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                What kind of tasks can I add and how often can I add a task?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                You can add any business task that you have been procrastinating
                about, or that you just need to do that day! It could be writing
                a blog post, creating your website, emailing 3 clients, creating
                an SEO strategy, making an Instagram post - or even cleaning
                your desk or getting to inbox zero! You could add one task a
                week or you could add 10 tasks a day - it's up you! The more
                tasks you add, the more incentive you'll have to get your tasks
                done, the more chances you'll have of winning the lottery - and
                the higher the lottery prize pool will be! Feel good knowing
                that you're getting your tasks done - and even if you don't win
                the prize money, you'll be helping another person to reach their
                dreams!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Does the full 1 MATIC go into the lottery?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                We do a 70/30 split where 70% of each MATIC goes into the
                lottery. The other 30% we keep as a service fee for business
                expenses. This way we can have funding towards our businesses
                expenses and continually aim to improve our platform.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Is there any possibility that I pay to participate in the
                lottery but the prize money does not get distributed?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                The only possibility of this happening is if the wallet holding
                the lottery prize pool is hacked or if the lottery smart
                contracts are hacked. However, we are currently in the process
                of having our smart contracts audited to check for any security
                loopholes and we use a wallet that has a high focus on security.
                Please be sure to read our terms and conditions before taking
                part in the lottery!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
