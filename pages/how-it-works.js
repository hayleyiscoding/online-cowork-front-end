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
          <div className="text-center font-nunito">
            <h2 className="text-3xl font-normal font-nunito text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Frequently Asked Questions
            </h2>
            <p className="max-w-lg mx-auto mt-6 text-base text-gray-600 font-nunito font-light">
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
                provides an AMAZING way for us to create a lottery that is&nbsp;
                <strong>completely automated and completely fair</strong>
                &nbsp;as it is free of human interference. Secondly, online
                payment systems such as Paypal are limited in many countries.
                Blockchain technology provides a way{" "}
                <strong>
                  for payments to be made without the need of a third party
                </strong>{" "}
                such as a bank or credit union. Thirdly, many people associate
                blockchain technology with crypto scams. By building the Online
                CoWork lottery with blockchain technology,{" "}
                <strong>
                  we aim to show how useful this technology can be and how it
                  can be used for good to improve the lives of people around the
                  world
                </strong>
                .
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Why did you create this lottery?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                If you earn money online, it means you likely have tasks to
                complete - and you probably wouldn't mind some pocket money to
                fund your business! This is where the lottery comes in. It aims
                to help you with 2 common issues that plague women with online
                businesses - <strong>productivity and funding</strong>. Our
                founder, Hayley, has travelled to many countries and came across
                many women who were trying to make a living online. And so
                Online CoWork was born. (But let's not forget that this is also
                about having a bit of fun and connecting with like-minded people
                from around the world!)
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
                co-working spaces. We are talking about{" "}
                <strong>
                  virtual assistants, social media managers, bloggers,
                  YouTubers, online yoga instructors, Etsy and Amazon sellers,
                  influencers, software developers, online lawyers, online
                  accountants, etc!
                </strong>
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                But do I have to be a women/non-binary person to participate?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                The Online CoWork lottery is aimed at helping{" "}
                <strong>women and non-binary people specifically</strong> - as
                this is a demographic that has historically been marginalized.
                However, we didn't create Online CoWork to discriminate based on
                gender! If you don't identify as female/non-binary, you are
                welcome to participate if you feel that our platform could be of
                use to you!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Ok, so what are the exact steps?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                1){" "}
                <strong>Join the free Online CoWork Discord community</strong>{" "}
                and <strong>make sure that you are verified</strong> by
                completing the application form inside the community. In order
                to try to limit spammers, only 'Online CoWorkers' who are
                verified may take part in the lottery.
                <br />
                <br />
                2) Make sure that <strong>
                  you have a free crypto wallet
                </strong>{" "}
                and that it <strong>has a few MATIC coins</strong> in it (more
                on this later!).
                <br />
                <br />
                3) <strong>Connect your wallet</strong> on the home page (
                <a
                  href="https://metaschool.so/articles/how-to-change-add-new-network-metamask-wallet/"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  make sure that it is on the Polygon Network
                </a>
                ) and you'll see a box where you can add a task that you've been
                procrastination about.{" "}
                <strong>Type your task into the box</strong> and push the button
                to "Get it done!".
                <br />
                <br />
                4) When you push the button, your wallet will pop up and you'll
                be asked to <strong>confirm the transaction</strong>. It costs 1
                MATIC (approx. USD 1) to add one task. But you can see the exact
                current price of MATIC by clicking{" "}
                <a
                  href="https://www.coingecko.com/en/coins/polygon"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                . You will also need to pay a 'gas fee' for (automatically) the
                transaction which is usually less than $0.01c. We have created
                this lottery on the Polygon Network as it allows for very cheap
                transaction costs compared to the Ethereum Mainnet.
                <br />
                <br />
                5) Once the transaction has been confirmed,{" "}
                <strong>
                  you should see it appear in the task feed below the form
                </strong>
                . Now go, go go - <strong>get your task done!</strong> You'll be
                able to see the tasks of others appearing in the task feed as
                well, and this will also hopefully help to motivate you to get
                working!
                <br />
                <br />
                6) Every task you add acts as a{" "}
                <strong>"lottery ticket"</strong> where you'll be entered into a
                weekly draw.{" "}
                <strong>
                  The more tasks you add, the more entries you get into the
                  lottery!
                </strong>
                <br />
                <br />
                7) The 1 MATIC that each person pays for each task gets{" "}
                <strong>
                  pooled together to create the lottery "winnings"
                </strong>
                . These winnings will be distributed to one random "Online
                CoWorker" every 7 days to provide funding for their online
                business - to pay for things such as website hosting, shopify
                fees, extra product stock, etc. Or alternatively, if the Online
                CoWorker doesn't have an online business, it could be used to
                pay for educational courses for professional/personal
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
                easiest is <strong>Metamask</strong>. It takes around 2 minutes
                to sign up and it is added as a Chrome extension in your
                browser. Visit&nbsp;
                <a
                  href="https://metamask.io"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Metamask.io
                </a>
                &nbsp;and follow the steps to sign up. Also,{" "}
                <a
                  href="https://wiki.polygon.technology/docs/develop/metamask/hello"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                is a great tutorial on how to set it up step-by-step.
                <br />
                <br />
                ** Something important to note about Metamask (and most crypto
                wallets) though is that it is not like a bank that you can call
                if you have a problem. You are{" "}
                <strong>FULLY in charge of the account</strong>. When you create
                your wallet, you will be given a <strong>secret phrase</strong>.
                This secret phrase is like the pin number for your bank account.
                However, if you lose the secret phrase, you will lose access to
                any funds in your Metamask forever. Wallet security is extremely
                important in the blockchain world, so it is important to keep
                your secret phrase safe! Write it on paper, put it in a ziploc
                bag and put it in a safe place - or even put it in a few safe
                places. This secret phrase can be used by anyone to access your
                account - so make sure it is in a place where no-one can use it
                and never share it with anyone online.
                <br />
                <br />
                If you are not comfortable with the idea of looking after your
                secret phrase, we recently learned about a wallet called{" "}
                <a
                  href="https://zengo.com"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  ZenGo
                </a>{" "}
                which you can download on your phone from the app store. To
                connect to the lottery on your desktop, you can follow their{" "}
                <a
                  href="https://zengo.com/wallet-connect/"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  easy instructions
                </a>{" "}
                for connecting your ZenGo wallet to a 'Dapp' (decentralized
                application, i.e. the Online CoWork Lottery!) by using a bridge
                called "Wallet Connect".
                <br />
                <br />
                2) Once you have a Metamask wallet, you would need to make sure
                that you have added the <strong>"Polygon" network</strong> to
                your Metamask. Please see steps{" "}
                <a
                  href="https://wiki.polygon.technology/docs/develop/metamask/config-polygon-on-metamask"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                on how to do this.
                <br />
                <br />
                3) Next, you need to{" "}
                <strong>load your wallet with MATIC coins</strong> in order to
                take part in the lottery - as each task costs 1 MATIC. You can
                do this many ways - through exchanges like Binance or Coinbase -
                or you could buy Matic directly on your{" "}
                <a
                  href="https://zengo.com"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  ZenGo app
                </a>{" "}
                with your debit/credit card. Click{" "}
                <a
                  href="https://zengo.com/assets/polygon"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                for instructions on how to do this.
                <br />
                <br />
                Another great way is that you could use{" "}
                <a
                  href="https://www.moonpay.com/buy/matic"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  Moonpay
                </a>{" "}
                which is also an easy way to load your Metamask wallet with
                MATIC coins from your bank account/debit card/credit card.
                <br />
                <br />
                In order to add MATIC to your Metamask from Moonpay, you will
                need your Metamask address. Your Metamask address is like your
                bank account number. It can be found{" "}
                <a
                  href="https://metamask.zendesk.com/hc/en-us/articles/360015488791-How-to-view-your-account-details-public-address"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                . NOTE: Each wallet (and your bank) charges a fee for exchanging
                regular currency (called 'fiat' - AUD, USD, etc) into crypto.
                And you will be charged again when you convert your crypto back
                to fiat currency. This fee can range from 1 to 3% - please check
                the fees for your personal wallet provider and your bank.
                <br />
                <br />
                Also,{" "}
                <strong>
                  if you cannot see your MATIC coins in your Metamask wallet
                  once you have purchased them
                </strong>
                , look at the{" "}
                <a
                  href="https://support.ledger.com/hc/en-us/articles/6375103346077-Add-custom-tokens-to-MetaMask?docs=true"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  bottom of your Metamask screen
                </a>{" "}
                and you will see a button "Import Token". Click that and paste
                this contract address for Polygon Matic:
                0x0000000000000000000000000000000000001010, then click 'Add
                Custom Token'. Now, your MATIC coins should be visible in your
                wallet under 'Assets'.
                <br />
                <br />
                Added to this, if you are buying cryptocurrency for the first
                time, you will usually be required to verify your identity first
                (for example with MoonPay) - this is for KYC purposes to comply
                with legal regulations. You will usually need to submit a copy
                of your passport/ID.
                <br />
                <br />
                4) If you have any problems or if you would like someone to help
                you through this process, please feel free to email us at info
                (at) onlinecowork.com. We provide an onboarding service for an
                extra fee to help you to get set up.
                <br />
                <br />
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
                Does this lottery have a free community as well?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                Yes! Join us on Discord - the virtual office for women who work
                online! Co-work and connect with others from around the world!
                Click{" "}
                <a
                  href="https://office.onlinecowork.com"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
                .
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Who can I contact if I have more questions?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                You are welcome to message us at info (at) onlinecowork.com!
                However, as we are a very small team, please allow 3 ot 4 days
                for a response. Thank you!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                I would like to advertise my products and services, do you know
                where I could do this?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                We have dedicated our home page (onlinecowork.com) to sharing
                the events, products and services of women who work online!
                Think of it as a more organized version of a Facebook Group
                promo thread! Click{" "}
                <a
                  href="https://onlinecowork.com"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>{" "}
                to post a link to your blogs, Etsy products, workshops, quizzes,
                freebies, etc! It's free. Also, if you'd like to advertise
                within our discord community (or perhaps host workshops within
                our Discord community), please contact us at info (at)
                onlinecowork.com.
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Can you tell me more about Blockchain security?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                The most important thing that you need to know right now is that
                while blockchain technology is extremely useful and is changing
                the face of many industries such as healthcare, finance, etc,
                security is extremely important! If you'd like to learn more
                about how to keep the funds in your Metamask wallet safe, please
                read{" "}
                <a
                  href="https://www.alphr.com/metamask-got-hacked/"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  this article
                </a>
                .
                <br />
                <br />
                It is a good idea to not use your Metamask wallet while on
                public wifi, don't click on any suspicious links in your emails
                or online and never give your secret phrase to anyone. It is
                also a good idea to avoid keeping large amounts of money in your
                Metamask account. Please note that in the unlikely event that
                your Metamask wallet gets hacked and you lose your money, we
                cannot be held responsible. But the risk is small and know that
                over 20 million people use Metamask to keep their funds safe!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                What if I am not able to purchase MATIC? Are there any
                alternatives to buying MATIC with a credit/debit card, Apple
                Pay, bank transfer, etc?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                There are a few ways that you can 'earn' crypto online - we
                found{" "}
                <a
                  href="https://geekflare.com/finance/earn-free-crypto/"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  this article
                </a>{" "}
                which gives some options! You can then convert your earnings
                into MATIC to use for the lottery! Remember, you only need to
                add one task (around 1 USD) to be eligible for the draw that
                week!
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-gray-900 sm:text-2xl font-pj">
                Where can I learn more about Web3 and Blockchain Technology?
              </p>
              <p className="mt-3 text-base font-normal text-gray-600 sm:mt-6 sm:text-lg font-pj">
                This{" "}
                <a
                  href="https://hayleyiscoding.hashnode.dev/web-3-for-beginners"
                  className="underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  article
                </a>{" "}
                is a great start! It is a very simple article that our founder,
                Hayley, wrote on Hashnode where it was featured.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
