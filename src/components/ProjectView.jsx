import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
import { MainContext } from "../context/MainContext";
import VariantModal from "./VariantModal";
const ProjectView = () => {
  const context = React.useContext(MainContext);
  const { languagePage } = context;
  const [visibleModal, setVisibleModal] = React.useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const projectsVi = [
    {
      name: "Mina House",
      type: "Web Admin + Web App",
      year: "Mar2022",
      align: "right",
      image:
        "https://admin.minahouse.vn/uploads/PES/Image/002_Bi mat-638583990087830971.jpg",
      link: "https://minahouse.vn/",
      description:
        "Web app đặt phòng trực tuyến, đặt phòng nhanh chóng - không cần chạm mặt",
      short_description: "Ứng dụng đặt phòng nhanh chóng, không cần tiếp xúc.",
      list_tech: ["React JS", "Tailwind", "AntDesign", ".NET", "SQL"],
      long_description:
        "Mina House là nền tảng web giúp người dùng đặt phòng trực tuyến một cách nhanh chóng và tiện lợi, hoàn toàn không cần tiếp xúc trực tiếp. Giải pháp hiện đại phù hợp với nhu cầu du lịch và lưu trú trong thời kỳ số hóa.",
    },
    {
      name: "Winlab",
      type: "Web Admin + App",
      year: "Jan2023",
      align: "right",
      image:
        "https://winlab.vn/wp-content/uploads/2023/08/perfume-shower-gel-800x800.jpg",
      link: "https://winlab.vn/",
      description:
        "Website cung cấp dịch vụ gia công mỹ phẩm cao cấp và quản bá sản phẩm \n App phục vụ việc chấm công và giám sát số liệu quản lý kho",
      short_description:
        "Giải pháp số hoá quy trình gia công mỹ phẩm và quản lý nội bộ.",
      list_tech: ["React JS", "Tailwind", ".NET", "SQL"],
      long_description:
        "Winlab cung cấp website để giới thiệu dịch vụ gia công mỹ phẩm cao cấp và quảng bá sản phẩm đến khách hàng. Đồng thời, hệ thống app mobile được sử dụng bởi nhân viên nội bộ để chấm công, theo dõi dữ liệu kho và quản lý hiệu suất làm việc.",
    },
    {
      name: "BVDL CME",
      type: "Web Admin + Web Client + App",
      year: "Sept2022",
      align: "left",
      image:
        "https://admin.daotao.bvdl.org.vn/uploads/seminar/S-280525-0190/images/imageBanner_638841077687643547.png",
      link: "https://daotao.bvdl.org.vn/",
      description:
        "Website quản lý hội nghị cấp chứng nhận y khoa - CME \n Website Client hiển thị các hội nghị, diễn đàn, tin tức,... và cho phép người dùng đăng kí tham dự hội nghị\n App Mobile để quét - tra cứu thông tin khách mời , in chứng chỉ và điểm danh",
      short_description: "Hệ thống quản lý hội nghị cấp chứng nhận CME.",
      list_tech: [
        "React JS",
        "React Native",
        "Tailwind",
        "Chakra UI",
        "Magus UI",
        ".NET",
        "SQL",
      ],
      long_description:
        "BVDL CME là nền tảng toàn diện phục vụ việc tổ chức và quản lý hội nghị y khoa. Gồm trang quản trị để cấu hình hội nghị, website công khai để hiển thị diễn đàn và cho phép người dùng đăng ký tham dự, và app mobile hỗ trợ điểm danh, in chứng chỉ, và tra cứu khách mời.",
    },
    {
      name: "SongHuong Adv",
      type: "Web Admin + App",
      year: "Jan2023",
      align: "right",
      image:
        "https://res.cloudinary.com/dd0qffuvy/image/upload/v1749346182/logo_okbfgs.png",
      link: "http://songhuong.phoenixcompany.vn",
      description:
        "Website quản lý dữ liệu chấm công cho các PG, và tạo các chương trình có liên quan \n App mobile cho các PG chấm công và gửi các dữ liệu công việc",
      short_description: "Giải pháp quản lý chấm công và hoạt động PG.",
      list_tech: [
        "React JS",
        "React Native",
        "Chakra UI",
        "Magus UI",
        ".NET",
        "SQL",
      ],
      long_description:
        "SongHuong Adv giúp doanh nghiệp tổ chức và quản lý đội ngũ PG hiệu quả. Website cho phép tạo và quản lý các chiến dịch marketing, trong khi app mobile hỗ trợ nhân viên PG chấm công và gửi báo cáo công việc ngay trên điện thoại.",
    },
    {
      name: "Pos123",
      type: "Web Admin + App",
      year: "May2024",
      align: "right",
      image:
        "https://res.cloudinary.com/dd0qffuvy/image/upload/v1749346048/pos123_hg8aon.jpg",
      link: "https://pos123.vn/",
      description:
        "Website quản lý bán hàng có thể áp dụng cho doanh nghiệp có nhiều chi nhánh \n App mobile cho nhân gửi các dữ liệu bán hàng",
      short_description: "Nền tảng quản lý bán hàng đa chi nhánh.",
      list_tech: ["React JS", "Tailwind", ".NET", "SQL"],
      long_description:
        "Pos123 là hệ thống quản lý bán hàng hiện đại, phù hợp với mô hình doanh nghiệp có nhiều cửa hàng hoặc chi nhánh. Website hỗ trợ theo dõi hoạt động bán hàng tập trung, còn app mobile giúp nhân viên gửi dữ liệu bán hàng nhanh chóng và tiện lợi.",
    },
    {
      name: "AloGo",
      type: "App",
      year: "May2024",
      align: "left",
      image:
        "https://res.cloudinary.com/dd0qffuvy/image/upload/v1749346326/full_logo_s94y9m.png",
      link: "http://alogo-dev.phoenixcompany.vn/",
      description:
        "AloGo - App đặt xe nhanh chóng và tiện dụng cho khách hàng với các tính năng: tìm tài xế quanh đây, gửi lời nhắn cho tài xế, theo dõi lộ trình tài xế,...\n AloGo Driver App nhận khách nhanh chóng và tiện dụng cho tài xế",
      short_description: "Ứng dụng đặt xe và quản lý chuyến đi hiệu quả.",
      list_tech: [
        "React JS",
        "React Native",
        "Tailwind",
        "Magus UI",
        ".NET",
        "SQL",
        "GG Map API",
        "Signal IR",
      ],

      long_description:
        "AloGo là ứng dụng gọi xe giúp kết nối khách hàng với tài xế một cách tiện lợi. Người dùng có thể tìm tài xế gần nhất, theo dõi lộ trình, và nhắn tin trực tiếp. App dành cho tài xế (AloGo Driver) hỗ trợ tiếp nhận chuyến đi nhanh chóng và tối ưu quá trình di chuyển.",
    },
  ];
  const projectsEn = [
    {
      name: "Mina House",
      type: "Web Admin + Web App",
      year: "Mar2022",
      align: "right",
      image:
        "https://admin.minahouse.vn/uploads/PES/Image/002_Bi mat-638583990087830971.jpg",
      link: "https://minahouse.vn/",
      description:
        "Online room booking web app for fast, contactless reservations",
      short_description: "Quick and contactless room booking application.",
      list_tech: ["React JS", "Tailwind", "AntDesign", ".NET", "SQL"],
      long_description:
        "Mina House is a web platform that allows users to book rooms online quickly and conveniently without any physical contact. A modern solution suited for travel and accommodation in the digital era.",
    },
    {
      name: "Winlab",
      type: "Web Admin + App",
      year: "Jan2023",
      align: "right",
      image:
        "https://winlab.vn/wp-content/uploads/2023/08/perfume-shower-gel-800x800.jpg",
      link: "https://winlab.vn/",
      description:
        "Website for premium cosmetics OEM services and product promotion\nMobile app for attendance and warehouse data management",
      short_description:
        "Digitized solution for cosmetic OEM processes and internal management.",
      list_tech: ["React JS", "Tailwind", ".NET", "SQL"],
      long_description:
        "Winlab provides a website to showcase high-end cosmetic OEM services and promote products to clients. Simultaneously, the mobile app is used by internal staff for attendance tracking, warehouse data monitoring, and performance management.",
    },
    {
      name: "BVDL CME",
      type: "Web Admin + Web Client + App",
      year: "Sept2022",
      align: "left",
      image:
        "https://admin.daotao.bvdl.org.vn/uploads/seminar/S-280525-0190/images/imageBanner_638841077687643547.png",
      link: "https://daotao.bvdl.org.vn/",
      description:
        "Certification medical conference management website\nClient site displays events, forums, news, and allows user registration\nMobile app for guest info scanning, certificate printing, and check-in",
      short_description: "CME certification conference management system.",
      list_tech: [
        "React JS",
        "React Native",
        "Tailwind",
        "Chakra UI",
        "Magus UI",
        ".NET",
        "SQL",
      ],
      long_description:
        "BVDL CME is a comprehensive platform for organizing and managing medical certification conferences. It includes an admin portal for configuration, a public-facing website for events and user registration, and a mobile app for check-in, certificate printing, and guest lookup.",
    },
    {
      name: "SongHuong Adv",
      type: "Web Admin + App",
      year: "Jan2023",
      align: "right",
      image:
        "https://res.cloudinary.com/dd0qffuvy/image/upload/v1749346182/logo_okbfgs.png",
      link: "http://songhuong.phoenixcompany.vn",
      description:
        "Website for attendance data management of PGs and related campaign creation\nMobile app for PGs to clock in and submit job data",
      short_description: "PG attendance and activity management solution.",
      list_tech: [
        "React JS",
        "React Native",
        "Chakra UI",
        "Magus UI",
        ".NET",
        "SQL",
      ],
      long_description:
        "SongHuong Adv helps businesses organize and manage their PG teams efficiently. The website allows creation and management of marketing campaigns, while the mobile app enables PG staff to clock in and report work directly from their phones.",
    },
    {
      name: "Pos123",
      type: "Web Admin + App",
      year: "May2024",
      align: "right",
      image:
        "https://res.cloudinary.com/dd0qffuvy/image/upload/v1749346048/pos123_hg8aon.jpg",
      link: "https://pos123.vn/",
      description:
        "Sales management website for businesses with multiple branches\nMobile app for staff to submit sales data",
      short_description: "Multi-branch sales management platform.",
      list_tech: ["React JS", "Tailwind", ".NET", "SQL"],
      long_description:
        "Pos123 is a modern sales management system suitable for businesses with multiple stores or branches. The website helps monitor centralized sales operations, while the mobile app allows staff to submit sales data quickly and conveniently.",
    },
    {
      name: "AloGo",
      type: "App",
      year: "May2024",
      align: "left",
      image:
        "https://res.cloudinary.com/dd0qffuvy/image/upload/v1749346326/full_logo_s94y9m.png",
      link: "http://alogo-dev.phoenixcompany.vn/",
      description:
        "AloGo - A fast and convenient ride-hailing app with features like nearby driver search, messaging, and trip tracking\nAloGo Driver App for drivers to accept rides easily",
      short_description: "Ride-hailing app with efficient trip management.",
      list_tech: [
        "React JS",
        "React Native",
        "Tailwind",
        "Magus UI",
        ".NET",
        "SQL",
        "GG Map API",
        "Signal IR",
      ],
      long_description:
        "AloGo is a ride-hailing app that connects passengers and drivers conveniently. Users can find nearby drivers, track their trip, and communicate directly. The driver app (AloGo Driver) supports quick ride acceptance and optimizes the transportation process.",
    },
  ];

  return (
    <div>
      <div className="w-full   px-8 lg:px-48 ">
        <div className="pt-8 pr-8 lg:pl-16 lg:pt-16 lg:pr-0 relative ">
          <div className="bg-gradient-to-br from-orange-400 to-red-500 w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-[20px] hover:scale-[1.1] transition-transform duration-300 ease-in-out absolute top-0 lg:left-0 right-0 shadow-lg overflow-hidden">
            <img
              src={
                (languagePage === "en" ? projectsEn : projectsVi)[activeIndex]
                  .image
              }
              alt=""
              srcSet=""
              className="w-full h-full absolute object-cover rounded-[20px] hover:scale-[1.1] transition-transform duration-300"
            />
          </div>

          {/* <img
            src={(languagePage ==="en"?projectsEn : projectsVi)[activeIndex].image}
            alt="Card Image"
            className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-[20px] hover:scale-[1.1] transition-transform duration-300 ease-in-out absolute top-0 lg:left-0 right-0 shadow-lg "
          /> */}

          <div className="pt-8 lg:pt-0 bg-white min-h-96 rounded-3xl  lg:flex gap-8 items-end justify-end lg:justify-center shadow-lg dark:border-dark-mode">
            <div className=" lg:w-64 py-8 px-4  block lg:flex items-center justify-end gap-4 space-y-4 lg:space-y-0 ">
              <div className={`${activeIndex === 0 ? "opacity-40" : ""}`}>
                <button
                  className="p-4 bg-black text-white rounded-2xl"
                  onClick={() => {
                    setActiveIndex(activeIndex - 1);
                  }}
                  disabled={activeIndex === 0}
                >
                  <FaChevronLeft />
                </button>
              </div>
              <div
                className={`${
                  activeIndex === projectsVi?.length - 1 ? "opacity-40" : ""
                }`}
              >
                <button
                  className="p-4  bg-black text-white rounded-2xl"
                  onClick={() => {
                    setActiveIndex(activeIndex + 1);
                  }}
                  disabled={activeIndex === projectsVi?.length - 1}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div className="p-8  flex-1 space-y-4 ">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-2">
                {
                  (languagePage === "en" ? projectsEn : projectsVi)[activeIndex]
                    .type
                }
              </span>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                {
                  (languagePage === "en" ? projectsEn : projectsVi)[activeIndex]
                    .name
                }
              </h2>
              <div className="min-h-32">
                <p className="text-gray-600 leading-relaxed mb-6  pr-4 lg:pr-16 align-justify">
                  {
                    (languagePage === "en" ? projectsEn : projectsVi)[
                      activeIndex
                    ].description
                  }
                </p>
              </div>
              <div className="flex gap-4 justify-start m-auto">
                <a
                  className="px-4 py-4 w-[110px] text-white   inline-block bg-black text-white py-3 text-center rounded-l-2xl shadow-md font-medium  transition cursor-pointer"
                  onClick={() => setVisibleModal(true)}
                >
                  {languagePage === "en" ? "Detail" : "Chi tiết"}
                </a>
                <a
                  href={
                    (languagePage === "en" ? projectsEn : projectsVi)[
                      activeIndex
                    ].link
                  }
                  target="blank"
                  className="px-4 py-4 w-[110px] text-white   inline-block bg-black text-white py-3 text-center rounded-r-2xl shadow-md font-medium  transition"
                >
                  {languagePage === "en" ? "Preview" : "Xem thử"}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center dark:text-white/[0.9]">
        <a
          className="p-8 text-center flex-1 "
          href="https://github.com/K-Tran2001"
          target="blank"
        >
          {languagePage === "en" ? "View more" : "Xem thêm ở"} (Github)
        </a>
      </div>
      <VariantModal
        isOpen={visibleModal}
        setIsOpen={setVisibleModal}
        title={
          (languagePage === "en" ? projectsEn : projectsVi)[activeIndex].name
        }
        hiddenButtomConfirm={true}
        hiddenButtomClose={true}
      >
        <p className="indent-8">
          {
            (languagePage === "en" ? projectsEn : projectsVi)[activeIndex]
              .long_description
          }
        </p>

        <h3 className="mt-8 mb-4 font-bold text-md">
          {languagePage === "en" ? "Technologies" : "Công nghệ"}
        </h3>
        <div className="grid grid-cols-3 lg:grid-cols-4  items-center justify-start gap-2">
          {(languagePage === "en" ? projectsEn : projectsVi)[
            activeIndex
          ].list_tech.map((tech) => (
            <div
              className="py-1 px-2 text-center text-white bg-purple-500 rounded-xl"
              key={Math.random()}
            >
              {tech}
            </div>
          ))}
        </div>
      </VariantModal>
    </div>
  );
};

export default ProjectView;
