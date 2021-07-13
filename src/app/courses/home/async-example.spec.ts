import { fakeAsync, flush, tick } from "@angular/core/testing";

fdescribe('Async Testing Examples', () => {

  it('Async test example with Jasmine done()', (done: DoneFn) => {
    let test = false;
    setTimeout(() => {
      console.log('Running assertions');
      test = true;
      expect(test).toBeTruthy();
      done();
    }, 1000);
  });

  it('Async test example - setTimeout', fakeAsync(() => {
    let test = false;
    setTimeout(() => {
      console.log('Running assertions setTimeout');
      test = true;
    }, 1000);
    // tick(1000);
    flush();
    expect(test).toBeTruthy();

  }));

  it('Asynchronous test example with Jasmine done()', (done: DoneFn) => {

    let test = false;

    setTimeout(() => {

        console.log('running assertions');

        test = true;

        expect(test).toBeTruthy();

        done();

    }, 1000);

});
});
