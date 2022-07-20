import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { Link } from "react-router-dom";

class Role extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //角色
      role: [
        {
          id: "01",
          name: "魔術師",
          img: "https://i0.wp.com/werewolf.cc/wp-content/uploads/2020/07/%E7%8B%BC%E4%BA%BA%E6%AE%BA%E9%AD%94%E8%A1%93%E5%B8%AB.jpg?w=300&ssl=1",
        },
        {
          name: "攝夢人",
          img: "https://i0.wp.com/werewolf.cc/wp-content/uploads/2020/07/%E7%8B%BC%E4%BA%BA%E6%AE%BA%E6%87%BE%E5%A4%A2%E4%BA%BA.jpg?w=300&ssl=1",
        },
        {
          name: "獵魔人",
          img: "https://i0.wp.com/werewolf.cc/wp-content/uploads/2020/07/%E7%8B%BC%E4%BA%BA%E6%AE%BA-%E7%8D%B5%E9%AD%94%E4%BA%BA.jpg?w=300&ssl=1",
        },
        {
          name: "血月使徒",
          img: "https://i0.wp.com/werewolf.cc/wp-content/uploads/2020/07/%E7%8B%BC%E4%BA%BA%E6%AE%BA-%E8%A1%80%E6%9C%88%E4%BD%BF%E5%BE%92.jpg?w=300&ssl=1",
        },
        {
          name: "奇蹟商人",
          img: "https://images.twgreatdaily.com/images/image/8uv/8uvJ3XMBeElxlkkaA63B.jpg",
        },
        {
          name: "定序王子",
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWQTOgpMUoDTGQCWJaAiyhH7DolZ5g7mt__WtyLSBCN09TEcltqUm2vD1jBIp7euPYpBg&usqp=CAU",
        },
        {
          name: "蝕時狼妃",
          img: "https://storage.inewsdb.com/5048a9124839f05e1581368d5b322506.jpg",
        },
        {
          name: "惡靈騎士",
          img: "https://i0.wp.com/werewolf.cc/wp-content/uploads/2020/07/%E7%8B%BC%E4%BA%BA%E6%AE%BA-%E6%83%A1%E9%9D%88%E9%A8%8E%E5%A3%AB.jpg?w=300&ssl=1",
        },
        {
          name: "盜賊",
          img: "https://i0.wp.com/werewolf.cc/wp-content/uploads/2020/07/%E7%8B%BC%E4%BA%BA%E6%AE%BA%E7%9B%9C%E8%B3%8A.jpg?w=300&ssl=1",
        },
        {
          name: "丘比特",
          img: "https://i0.wp.com/werewolf.cc/wp-content/uploads/2020/07/%E7%8B%BC%E4%BA%BA%E6%AE%BA%E7%A7%8B%E6%AF%94%E7%89%B9.jpg?w=300&ssl=1",
        },
      ],
    };
  }

  render() {
    const data = this.state.role.map((item) => {
      return (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.name}
            loading="lazy"
          />
          <ImageListItemBar
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${item.name}`}
              >
                {/* 連結到對應頁面 */}
                <Link to="/role1">
                  <MenuBookIcon />
                </Link>
              </IconButton>
            }
          />
        </ImageListItem>
      );
    });

    return (
      <div>
        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={230}>
          {data}
        </ImageList>
      </div>
    );
  }
}

export default Role;
