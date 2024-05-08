import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

  const loggenIn = {firstName : "Kunj", lastName: "Shah", email: "kunj@kunj.com"};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type = "greeting"
            title = "Welcome"
            user = {loggenIn?.firstName || "Guest"}
            subText = "Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts = {[]}
            totalBanks = {1}
            totalCurrentBalance = {2098.90}
          />
        </header>

        Recent Transactions
      </div>

      <RightSidebar user={loggenIn} transactions = {[]} banks = {[{currentBalance: 908.09}, {currentBalance: 500}]} />
    </section>
  )
}

export default Home
