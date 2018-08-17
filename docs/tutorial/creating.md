# Creating your first app
We are going to use [**vue-cli 3**](https://cli.vuejs.org/) to scalfold the **smart home app**. Vue-cli 3 is awesome to create vue projects without wasting time.

If you have some experience with vue.js you can easily adapt this tutorial to be used into code sandboxes or browsers. Please check out our [getting started section](/guide/getting-started.html).

In this section we'll learn how to **create a project using vue-cli 3** and how to **install zircle-ui**
### Create a vue proyect using vue-cli 3
Let's start, to install **vue-cli 3**, open your terminal and type:

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

After that we are ready to create our **smart home dashboard**. In the same terminal run:
```bash
vue create smart-home
```
You will be prompted to pick a preset. For purposes of this tutorial choose the default preset that comes with a basic Babel + ESLint setup. 

Vue-cli will create a new folder called **'smart-home'** with the struture and files needed. Something like that:

```bash
.
├── babel.config.js
├── package.json
├── package-lock.json
├── node_modules
├── public
└── src
    ├── App.vue
    ├── assets
    ├── components
    ├── Views
    └── main.js
```

### Install **zircle-ui**

Now, it is time to install **zircle-ui**, in your terminal go to your smart-home folder and run:

```bash
cd smart-home
npm install zircle
#or
yarn add zircle
```

Finally, to check if your vue app is working in your terminal go to your smart-home folder and run:

```bash
npm run serve
# OR
yarn serve
```

Open your web browser and go to `http://localhost:8080` to see the app running.  

::: tip

If the default port 8080 is used, Vue will choose another. See your terminal to find out the active port.

:::

### See
- [**Guide: getting started**](/guide/getting-started.html)

