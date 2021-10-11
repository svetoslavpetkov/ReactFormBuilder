import AllInputs from "./views/AllInputs";
import FormTheOldWay from "./views/FormTheOldWay";
import HomeView from "./views/HomeView";
import UsingFormBuilder from "./views/UsingFormBuilder";

interface ISiteMapItem {
  title: string;
  path: string;
  description: string;
  Component: any;
}

export const siteMap: Array<ISiteMapItem> = [
  {
    title: "Home",
    path: "/",
    description: "Home route",
    Component: HomeView,
  },
  {
    title: "All inputs",
    path: "/all-inputs",
    description: "Page showing all possible inputs from the library",
    Component: AllInputs,
  },
  {
    title: "The old way",
    path: "/the-old-way",
    description: "Form build the old way",
    Component: FormTheOldWay,
  },
  {
    title: "Simple form buidler",
    path: "/using-the-form-builder",
    description: "Simple and quick way to use the form buidler",
    Component: UsingFormBuilder,
  }
];
