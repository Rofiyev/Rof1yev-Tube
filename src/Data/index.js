import {
  AiOutlinePlaySquare,
  AiOutlineLike,
  AiOutlineHome,
  AiOutlineFire,
  AiFillSetting,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { TfiLayoutMediaCenterAlt, TfiCup } from "react-icons/tfi";
import { CgMusicNote } from "react-icons/cg";
import {
  RiLiveLine,
  RiPlayCircleLine,
  RiUserShared2Line,
  RiMoneyDollarCircleLine,
  RiPlayListAddFill,
  RiShareForwardLine,
} from "react-icons/ri";
import { SiYoutubegaming } from "react-icons/si";
import { FaShopify, FaUserCog } from "react-icons/fa";
import {
  IoNewspaperOutline,
  IoEarthOutline,
  IoInvertMode,
} from "react-icons/io5";
import { RxExit } from "react-icons/rx";
import { TbLanguageHiragana } from "react-icons/tb";
import { GrSecure } from "react-icons/gr";
import {
  BsCollectionPlayFill,
  BsClockHistory,
  BsClock,
  BsPlayCircle,
  BsFlag,
  BsExclamationLg,
  BsCollectionPlay,
} from "react-icons/bs";
import { FiUser } from "react-icons/fi";

export const header = {
  sidebar: [
    {
      text: "Home",
      icon: <AiOutlineHome className="icon" />,
      path: "/",
    },
    {
      text: "Shorts",
      icon: <BsPlayCircle className="icon" />,
      path: "",
    },
    {
      text: "Subscriptions",
      icon: <TfiLayoutMediaCenterAlt className="icon" />,
      path: "",
    },
    {
      text: "",
    },
    {
      text: "Library",
      icon: <BsCollectionPlayFill className="icon" />,
      path: "",
    },
    {
      text: "History",
      icon: <BsClockHistory className="icon" />,
      path: "",
    },
    {
      text: "Your Videos",
      icon: <AiOutlinePlaySquare className="icon" />,
      path: "",
    },
    {
      text: "Watch later",
      icon: <BsClock className="icon" />,
      path: "",
    },
    {
      text: "Likes Videos",
      icon: <AiOutlineLike className="icon" />,
      path: "",
    },
    {
      text: "",
    },
    {
      text: "Trending",
      icon: <AiOutlineFire className="icon" />,
      path: "",
    },
    {
      text: "Music",
      icon: <CgMusicNote className="icon" />,
      path: "",
    },
    {
      text: "Live",
      icon: <RiLiveLine className="icon" />,
      path: "",
    },
    {
      text: "Gaming",
      icon: <SiYoutubegaming className="icon" />,
      path: "",
    },
    {
      text: "News",
      icon: <IoNewspaperOutline className="icon" />,
      path: "",
    },
    {
      text: "Sports",
      icon: <TfiCup className="icon" />,
      path: "",
    },
    {
      text: "Fashion & Beauty",
      icon: <FaShopify className="icon" />,
      path: "",
    },
    {
      text: "",
    },
    {
      text: "Settings",
      icon: <AiFillSetting className="icon" />,
      path: "",
    },
    {
      text: "Report history",
      icon: <BsFlag className="icon" />,
      path: "",
    },
    {
      text: "Help",
      icon: <AiOutlineQuestionCircle className="icon" />,
      path: "",
    },
    {
      text: "Send feedback",
      icon: <BsExclamationLg className="icon" />,
      path: "",
    },
  ],
  header: [
    "All",
    "Music",
    "Mixes",
    "Gaming",
    "Live",
    "Football",
    "Recently uploaded",
    "Watched",
    "New to you",
    "Nature",
    "Programming",
    "Uzbekistan news",
    "World news",
    "Movies",
    "Cartoon",
    "Comic",
    "ReactJS",
    "JavaScript",
  ],
};

export const profileData = {
  list: [
    {
      icon: <FiUser className="icon" />,
      text: "Kanalingiz",
      chevron: false,
      path: "",
    },
    {
      icon: <RiPlayCircleLine className="icon" />,
      text: "YouTube Studio",
      chevron: false,
      path: "",
    },
    {
      icon: <RiUserShared2Line className="icon" />,
      text: "Hisobingizni almashtirish",
      chevron: true,
      path: "",
    },
    {
      icon: <RxExit className="icon" />,
      text: "Chiqish",
      chevron: false,
      path: "",
    },
    { text: "" },
    {
      icon: <RiMoneyDollarCircleLine className="icon" />,
      text: "Xarid va Homiyliklar",
      chevron: false,
      path: "",
    },
    {
      icon: <FaUserCog className="icon" />,
      text: "YouTubedagi ma'lumotlaringiz",
      chevron: false,
      path: "",
    },
    { text: "" },
    {
      icon: <IoInvertMode className="icon" />,
      text: "Rejim: Kun/Tun",
      chevron: true,
      path: "",
    },
    {
      icon: <TbLanguageHiragana className="icon" />,
      text: "Tilni sozlash",
      chevron: true,
      path: "",
    },
    {
      icon: <GrSecure className="icon" />,
      text: "Xavsizlik",
      chevron: true,
      path: "",
    },
    {
      icon: <IoEarthOutline className="icon" />,
      text: "Mamlakat",
      chevron: true,
      path: "",
    },
    { text: "" },
    {
      icon: <AiFillSetting className="icon" />,
      text: "Sozlamalar",
      chevron: false,
      path: "",
    },
    { text: "" },
    {
      text: "Yordam",
      icon: <AiOutlineQuestionCircle className="icon" />,
      path: "",
    },
    {
      text: "Fikr-mulohaza",
      icon: <BsExclamationLg className="icon" />,
      path: "",
    },
  ],
};

export const mainPageCardData = [
  {
    icon: <BsCollectionPlay />,
    text: "Navbatga qo'shish",
  },
  {
    icon: <BsClock />,
    text: "Keyinroq saplash",
  },
  {
    icon: <RiPlayListAddFill />,
    text: "Playlistga saqlash",
  },
  {
    icon: <RiShareForwardLine />,
    text: "Ulashish",
  },
];
