# cypress-api-e2e-framework

## Commands:
1.  **npm install** or **npm install --force** if it is the case
2.  To run *api* tests use: **npm run cy:api**
2.  To run *e2e* tests use: **npm run cy:e2e**. By default, the tests run in electron. To run the tests in another browser, use: 
- **npm run cy:e2e:chrome** or 
- **npm run cy:e2e:edge** or
- **npm run cy:e2e:firefox**
3.  To generate a report, only after running *api* or *e2e* or *both* test sets from point 2, run:
- first, use: **npm run cy:report:combine** 
- after that, use: **npm run cy:report:html**

Now, on the main route we will find a folder named mochawesome-reports, where we will be able to find mochawesome.html which we can open to see the generated report
