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
    },
    {
      text: "Shorts",
      icon: <BsPlayCircle className="icon" />,
    },
    {
      text: "Subscriptions",
      icon: <TfiLayoutMediaCenterAlt className="icon" />,
    },
    {
      text: "",
    },
    {
      text: "Library",
      icon: <BsCollectionPlayFill className="icon" />,
    },
    {
      text: "History",
      icon: <BsClockHistory className="icon" />,
    },
    {
      text: "Your Videos",
      icon: <AiOutlinePlaySquare className="icon" />,
    },
    {
      text: "Watch later",
      icon: <BsClock className="icon" />,
    },
    {
      text: "Likes Videos",
      icon: <AiOutlineLike className="icon" />,
    },
    {
      text: "",
    },
    {
      text: "Trending",
      icon: <AiOutlineFire className="icon" />,
    },
    {
      text: "Music",
      icon: <CgMusicNote className="icon" />,
    },
    {
      text: "Live",
      icon: <RiLiveLine className="icon" />,
    },
    {
      text: "Gaming",
      icon: <SiYoutubegaming className="icon" />,
    },
    {
      text: "News",
      icon: <IoNewspaperOutline className="icon" />,
    },
    {
      text: "Sports",
      icon: <TfiCup className="icon" />,
    },
    {
      text: "Fashion & Beauty",
      icon: <FaShopify className="icon" />,
    },
    {
      text: "",
    },
    {
      text: "Settings",
      icon: <AiFillSetting className="icon" />,
    },
    {
      text: "Report history",
      icon: <BsFlag className="icon" />,
    },
    {
      text: "Help",
      icon: <AiOutlineQuestionCircle className="icon" />,
    },
    {
      text: "Send feedback",
      icon: <BsExclamationLg className="icon" />,
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
  ],
};

export const profileData = {
  list: [
    {
      icon: <FiUser className="icon" />,
      text: "Kanalingiz",
      chevron: false,
    },
    {
      icon: <RiPlayCircleLine className="icon" />,
      text: "YouTube Studio",
      chevron: false,
    },
    {
      icon: <RiUserShared2Line className="icon" />,
      text: "Hisobingizni almashtirish",
      chevron: true,
    },
    {
      icon: <RxExit className="icon" />,
      text: "Chiqish",
      chevron: false,
    },
    { text: "" },
    {
      icon: <RiMoneyDollarCircleLine className="icon" />,
      text: "Xarid va Homiyliklar",
      chevron: false,
    },
    {
      icon: <FaUserCog className="icon" />,
      text: "YouTubedagi ma'lumotlaringiz",
      chevron: false,
    },
    { text: "" },
    {
      icon: <IoInvertMode className="icon" />,
      text: "Rejim: Kun/Tun",
      chevron: true,
    },
    {
      icon: <TbLanguageHiragana className="icon" />,
      text: "Tilni sozlash",
      chevron: true,
    },
    {
      icon: <GrSecure className="icon" />,
      text: "Xavsizlik",
      chevron: true,
    },
    {
      icon: <IoEarthOutline className="icon" />,
      text: "Mamlakat",
      chevron: true,
    },
    { text: "" },
    {
      icon: <AiFillSetting className="icon" />,
      text: "Sozlamalar",
      chevron: false,
    },
    { text: "" },
    {
      text: "Yordam",
      icon: <AiOutlineQuestionCircle className="icon" />,
    },
    {
      text: "Fikr-mulohaza",
      icon: <BsExclamationLg className="icon" />,
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
