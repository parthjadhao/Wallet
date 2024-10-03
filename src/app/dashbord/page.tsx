"use client";
import { useEffect, useState } from "react";
import { PrimaryButton } from "../component/Button";
import { useRouter } from "next/navigation";

const Dashbord = () => {
  const router = useRouter();
  const [accounts, setAccounts] = useState([]);
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedAccounts = localStorage.getItem("accounts");

    if (storedAccounts === null || storedAccounts.length === 0) {
      router.push("/createAccount");
      return;
    }

    const accountsArray = storedAccounts ? JSON.parse(storedAccounts) : [];
    setAccounts(accountsArray);
    setIsLoading(false);
  }, [router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-12 h-screen w-full">
      <div className="flex flex-col justify-between col-span-2 bg-slate-950 m-2">
        <div>
          {accounts.map((account, index) => (
            <Account
              key={index}
              accountLogo={`A${index + 1}`}
              accountName={`Account-${index + 1}`}
              onClick={() => setSelectedAccount(account)}
            />
          ))}
        </div>
        <div className="mb-12">
          <div className="flex justify-center">
            <button
              className="bg-slate-500 font-semibold p-4 w-full text-2xl"
              onClick={() => {
                router.push("/createAccount");
              }}
            >
              Create Account
            </button>
          </div>
          <div>
            <button className="bg-slate-600 font-semibold p-4 w-full text-2xl">
              Setting
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-10">
        <div className="flex justify-center">
          {selectedAccount && <AccountDetail account={selectedAccount} />}
        </div>
      </div>
    </div>
  );
};

export default Dashbord;

const AccountDetail = ({ account }: { account: any }) => {
  const [copied, setCopied] = useState(false);
  const [balance, setBalance] = useState<number | null>(null);
  const publicKey = account?.publicKey ?? ""; 

  useEffect(() => {
    console.log("this is :- "+typeof(publicKey))
    const fetchBalance = async () => {
      try {
        const fetchedBalance = await mockFetchBalance(publicKey);
        setBalance(fetchedBalance);
      } catch (error) {
        console.error("Failed to fetch balance:", error);
      }
    };

    fetchBalance();
  }, [publicKey]);
  useEffect(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
      }, 3000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [copied]);

  return (
    <div className="m-20 w-1/2 rounded-xl">
      <div className="flex w-full justify-between">
        <div className="bg-slate-700 p-5 m-5 rounded-full">
          <img src="/coins/solana.png" alt="solana" width={70} height={70} />
        </div>
        <h1 className="flex items-center font-bold text-6xl">Solana</h1>
        <button className="flex items-center bg-red-600 mt-14 mb-14 mr-6 rounded-lg p-2 hover:bg-red-700 font-medium">
          Delete Account
        </button>
      </div>
      <div className="flex justify-between w-full">
        <div className="text-7xl mt-2">
          {balance !== null ? `$${balance}` : "$0.0"}{" "}
          <span className="text-slate-500 text-3xl font-semibold">sol</span>
        </div>
        <button
          className="bg-slate-700 p-3 m-10 rounded-xl text-xl w-52"
          onClick={() => {
            setCopied(true);
            navigator.clipboard.writeText(publicKey);
          }}
        >
          {copied ? "copied" : "your wallet address"}
        </button>
      </div>
      <div className="flex justify-between">
        <PrimaryButton onClick={() => {}}>Send</PrimaryButton>
        <PrimaryButton onClick={() => {}}>Swap</PrimaryButton>
        <PrimaryButton onClick={() => {}}>Receive</PrimaryButton>
      </div>
    </div>
  );
};

const mockFetchBalance = async (publicKey: string): Promise<number> => {
  console.log("Fetching balance for public key:", publicKey);
  return new Promise((resolve) => setTimeout(() => resolve(123.45), 1000)); 
};

const Account = ({
  accountName,
  accountLogo,
  onClick,
}: {
  accountName: string;
  accountLogo: string;
  onClick: () => void;
}) => {
  return (
    <div
      className="flex justify-center bg-slate-800 m-2 p-2 rounded-2xl cursor-pointer"
      onClick={onClick}
    >
      <div className="m-2 rounded-full bg-slate-500 w-9 h-9 flex justify-center items-center">
        {accountLogo}
      </div>
      <div className="m-2 flex items-center">{accountName}</div>
    </div>
  );
};