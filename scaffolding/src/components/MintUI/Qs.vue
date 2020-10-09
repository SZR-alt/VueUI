<template>
  <div>1234</div>
</template>
<script>
export default {
  mounted() {
    let obj = {
      id: 1,
      username: "Tom",
      friends: [
        {
          name: "Rose",
          age: 21,
        },
        {
          name: "Frank",
          age: 19,
        },
      ],
    };
    //将数组或对象转换成请求字符串形态
    console.log(decodeURI(this.qs.stringify(obj)));
    let str = "username=Tom&password=123&love[0]=AA&love[1]=BB&love[2]=CC";
    //将请求字符串形态转换成数组或对象
    console.log(this.qs.parse(str));
    obj = {
      id: 1,
      username: "Tom",
      friends: ["Rose", "Frank", "David"],
    };
    console.log(decodeURI(this.qs.stringify(obj)));
  },
};
</script>