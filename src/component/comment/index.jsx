import { useState } from "react";

const Comment = (props) => {
  const [comment, setComment] = useState("高考还没考 你怎么知道我考不上酒吧舞");
  const [option, setOption] = useState("madiamond");

  const handleChange = (event) => {
    const name = event.target.name;
    name === "textarea"
      ? setComment(event.target.value)
      : setOption(event.target.value);
  };

  const handleSubmit = (event) => {
    alert("觉哥叹惋：" + comment + "\n" + "u option：" + option);
    // alert("u option: " + option);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={comment} onChange={handleChange}></input>
      <br />
      <label>
        觉哥的梦：
        <textarea
          name="textarea"
          value={comment}
          onChange={handleChange}
        ></textarea>
      </label>
      <br />
      <label>
        请根据一万四的大数据课程选择你的 Coser&nbsp;
        <select name="select" value={option} onChange={handleChange}>
          <option value="juege">觉子祥</option>
          <option value="madiamond">玛钻石</option>
          <option value="依托答辩">趣味皇帝周痕🐏</option>
        </select>
      </label>
      <input type="submit" value="提交"></input>
    </form>
  );
};

export default Comment;
