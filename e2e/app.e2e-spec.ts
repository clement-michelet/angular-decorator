import { AngularDecoratorPage } from "./app.po";

describe('angular-decorator App', function () {
    let page: AngularDecoratorPage;

    beforeEach(() => {
        page = new AngularDecoratorPage();
    });

    it('should display message saying Movies', () => {
        page.navigateTo();
        expect(page.getParagraphText()).toEqual('Movies');
    });
});
