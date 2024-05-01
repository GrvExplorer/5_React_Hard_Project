import { DashboardOutlined, ShopOutlined , ProjectOutlined} from "@ant-design/icons";
import { IResourceItem } from "@refinedev/core";

export const resources: IResourceItem[] = [
  {
    name: "Dashboards",
    list: "/",
    meta: {
      label: "Dashboards",
      icon: <DashboardOutlined />,
      canDelete: true,
    },
  },
  {
    name: "Companies",
    list: "/companies",
    create: "/companies/create",
    edit: "/companies/edit/:id",
    show: "/companies/show/:id",
    meta: {
      label: "Companies",
      canDelete: true,
      icon: <ShopOutlined />,
    },
  },
  {
    name: "tasks",
    list: "/tasks",
    create: "/tasks/create",
    edit: "/tasks/edit/:id",
    meta: {
      label: "Tasks",
      canDelete: true,
      icon: <ProjectOutlined />,
    },
  },

];
