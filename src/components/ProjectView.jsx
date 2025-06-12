import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
const ProjectView = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const projects = [
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
      long_description:
        "AloGo là ứng dụng gọi xe giúp kết nối khách hàng với tài xế một cách tiện lợi. Người dùng có thể tìm tài xế gần nhất, theo dõi lộ trình, và nhắn tin trực tiếp. App dành cho tài xế (AloGo Driver) hỗ trợ tiếp nhận chuyến đi nhanh chóng và tối ưu quá trình di chuyển.",
    },
  ];
  return (
    <div>
      <div className="w-full   px-8 lg:px-48 ">
        <div className="pt-8 pr-8 lg:pl-16 lg:pt-16 lg:pr-0 relative ">
          <div className="bg-gradient-to-br from-orange-400 to-red-500 w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-[20px] hover:scale-[1.1] transition-transform duration-300 ease-in-out absolute top-0 lg:left-0 right-0 shadow-lg overflow-hidden">
            <img
              src={projects[activeIndex].image}
              alt=""
              srcset=""
              className="w-full h-full absolute object-cover rounded-[20px] hover:scale-[1.1] transition-transform duration-300"
            />
          </div>

          {/* <img
            src={projects[activeIndex].image}
            alt="Card Image"
            className="w-64 h-64 lg:w-80 lg:h-80 object-cover rounded-[20px] hover:scale-[1.1] transition-transform duration-300 ease-in-out absolute top-0 lg:left-0 right-0 shadow-lg "
          /> */}

          <div className="pt-8 lg:pt-0 bg-white min-h-96 rounded-3xl  lg:flex gap-8 items-end justify-end lg:justify-center shadow-lg ">
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
                  activeIndex === projects?.length - 1 ? "opacity-40" : ""
                }`}
              >
                <button
                  className="p-4  bg-black text-white rounded-2xl"
                  onClick={() => {
                    setActiveIndex(activeIndex + 1);
                  }}
                  disabled={activeIndex === projects?.length - 1}
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
            <div className="p-8  flex-1 space-y-4 ">
              <span className="inline-block bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium mb-2">
                {projects[activeIndex].type}
              </span>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                {projects[activeIndex].name}
              </h2>
              <div className="min-h-32">
                <p className="text-gray-600 leading-relaxed mb-6  pr-4 lg:pr-16 align-justify">
                  {projects[activeIndex].description}
                </p>
              </div>
              <div className="flex gap-4 justify-start m-auto">
                <a className="px-4 py-4 w-[110px] text-white   inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 text-center rounded-l-2xl shadow-md font-medium  transition">
                  Detail
                </a>
                <a
                  href={projects[activeIndex].link}
                  target="blank"
                  className="px-4 py-4 w-[110px] text-white   inline-block bg-gradient-to-br from-orange-400 to-red-500 text-white py-3 text-center rounded-r-2xl shadow-md font-medium  transition"
                >
                  Preview
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <a
          className="p-8 text-center flex-1 "
          href="https://github.com/K-Tran2001"
          target="blank"
        >
          View more (Github)
        </a>
      </div>
    </div>
  );
};

export default ProjectView;
