const ProjectPrompts = [
  {
    name: "author",
    message: "please input author",
  },
  {
    name: "description",
    message: "please input description",
  },
];

const DirExistPrompts = [
  {
    name: "isRemove",
    message: "目录已存在,是否要清空目录 n/y",
    default: "n",
    choices: [
      {
        name: "清空",
        value: "y",
      },
      {
        name: "取消",
        value: "n",
      },
    ],
  },
];

export { ProjectPrompts, DirExistPrompts };
