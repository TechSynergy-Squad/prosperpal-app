export class ButtonStyles {
  variant: string;
  isDelete: boolean;
  constructor(variant: string) {
    this.variant = variant || "container";
    this.isDelete = false;
  }

  setFunctionType(func: string) {
    this.isDelete = !(func == "edit");
  }

  getButtonStyle() {
    switch (this.variant) {
      case "container":
        return "bg-green-600 rounded-md text-white inline-block text-xs font-medium self-center px-6 py-2.5";
      case "outline":
        return this.isDelete
          ? "border-red-600 p-2 inline-block rounded-md border text-red-600"
          : "bg-indigo-500 inline-block rounded-md text-white p-2";
      case "text":
        return "inline-block p-2 font-medium text-sm leading-tight text-white";
      default:
        return "bg-green-600 rounded-md text-white inline-block text-xs font-medium self-center px-6 py-2.5";
    }
  }
}
