import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid gap-10 lg:grid-cols-2 xl:grid-cols-3 min-h-screen"> {/* grid 는 사용하면 모든게 행(row)로 바뀐다. 열을 만들려면 grid-cols 를 하자. */}
      <div className="bg-white dark:bg-black flex flex-col justify-between p-6 rounded-3xl shadow-xl">
        <span className="font-semibold dark:text-white text-2xl">Select Item</span>
        <ul>
          <div className="flex justify-between my-2 ">
            <span className="text-gray-500 dark:text-gray-100">Grey Chair</span>
            <span className="font-semibold dark:text-white">$19</span>
          </div>
          <div className="flex justify-between my-2 ">
            <span className="text-gray-500 dark:text-gray-100">Grey Chair</span>
            <span className="font-semibold dark:text-white">$19</span>
          </div>
        </ul>

        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <button
         className="mt-5 bg-blue-500 dark:bg-black dark:border-white dark:border text-white p-3
         text-center rounded-xl w-3/4 mx-auto
         dark:hover:bg-white hover:bg-teal-500 hover:text-black
         active:bg-yellow-500 focus:bg-red 500"> {/* modifier를 통해 많은 스타일 요소를 지정할 수 있다! Super cool~*/}
           Checkout
        </button>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl">
        <div className="portrait:bg-indigo-600 landscape:bg-teal-500 p-6 pb-14 xl:pb-40"> {/* landscape: 모바일 눕혔을 때 화면, portrait: 세로, 테일윈드는 모바일을 기준으로 정렬됨 */}
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex relative -top-16 items-end justify-between">
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="h-24 w-24 zinc-300 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative  flex flex-col items-center -mt-14 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-3xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex mb-5 justify-between items-center">
          <span>⬅️</span>
          <div className="space-x-3">
            <span>⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💖</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Lounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 bg-opacity-50 focus:ring-2 ring-offset-2 ring-yellow-500 transition" /> {/* ring-offset -> ring에서 거리, opacity -> 불투명도 transition -> focus해제시 원상복구*/}
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-5"> {/* space -> margin left right를 알아서 계산해줌 ! */}
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl texty-gray-500">-</button>
              <span>1</span> {/* aspect-square -> 정사각형으로 만듦 */}
              <button className="rounded-lg bg-blue-200 flex justify-center items-center aspect-square w-8 text-xl text-gray-500">+</button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 py-2 px-8 text-center text-xs text-white rounded-lg">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;

{/* JIT compiler (Just In Time compiler) => 코드를 실시간으로 감시하면서 필요한 클래스를 생성하는 기능 수행
        <div className="dark:md:hover:bg-teal-400 bg-[url('/vercel.svg')]">
        <h2 className="text-[97851px] text-[#000]">Hello</h2> 
        이런 식으로 적으면 클래스가 새로 생성됨과 동시에 텍스트크기나 링크가 생김! awesome!
      */}
        