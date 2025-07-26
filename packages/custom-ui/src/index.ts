import UiButton from './components/button';
import UiList from './components/list';
import { withInstall } from './utils/with-install';

const components = {
    UiButton,
    UiList,
}

const CustomUi = withInstall(components, {
    install(app) {
      Object.entries(components).forEach(([name, component]) => {
        app.component(name, component);
      });
    },
});

export default CustomUi;
