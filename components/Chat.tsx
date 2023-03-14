import { text } from "stream/consumers";
import Message from "./Message";

type Props = {
  chatId: String;
};

const messageList: Message[] = [
  {
    text: "阿什拉夫卡进度索拉卡阿斯利康到付件阿什拉夫打卡久啊离开时代峰峻阿里卡附件阿斯利康到付件阿是漏打卡飞机啊漏打卡生发剂来看就",
    createAt: Date.now(),
  },
  {
    text: "阿斯蒂芬立卡觉得付了款啊圣诞快乐放假啊上课拉法基阿萨理发卡阿斯蒂芬看见啊圣诞快乐飞机",
    createAt: Date.now(),
    from: "ChatGPT",
  },
  {
    text: "水电费卡拉胶单身快乐激发索拉卡阿萨德浪费空间啊收到了发卡机",
    createAt: Date.now(),
  },
  {
    text: "阿什拉夫卡进度索拉卡阿斯利康到付件阿什拉夫打卡久啊离开时代峰峻阿里卡附件阿斯利康到付件阿是漏打卡飞机啊漏打卡生发剂来看就",
    createAt: Date.now(),
    from: "ChatGPT",
  },
];

function Chat({ chatId }: Props) {
  return (
    <div className="flex-1 ">
      {messageList.map((msg) => (
        <Message message={msg} />
      ))}
    </div>
  );
}

export default Chat;
