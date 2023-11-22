import ko from "dayjs/esm/locale/ko";
import localizedFormat from "dayjs/esm/plugin/localizedFormat";
import dayjs from "dayjs/esm";

dayjs.extend(localizedFormat);
dayjs.locale(ko);

export default dayjs;
