Vue.component('navbar-div', {
    props: ['links'],
    template: `
    <nav class="navbar" role="navigation" aria-label="main navigation" style="background: var(--color-gradient);">
    <div class="navbar-brand">
        <a class="navbar-item has-text-white is-size-5 has-text-weight-bold" href="">
            Cha<img src="https://media.discordapp.net/attachments/1072181252964233328/1076461183864934431/9611156.png"> CarHUB
        </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end ">
            <div class="navbar-item">
                <a href="home.html">
                    <img src="https://media.discordapp.net/attachments/1072181252964233328/1073627391571808316/1177455.png">
                </a>
                
            </div>
            <div class="navbar-item">
                <a href="view_car.html">
                    <img src="https://media.discordapp.net/attachments/1072181252964233328/1073627928706949120/9610755.png">
                </a>
                
            </div>
            <div class="navbar-item has-dropdown is-hoverable has-text-centered">
                <a class="navbar-link" href="me.html">
                    <img src="https://media.discordapp.net/attachments/1072181252964233328/1073622193784754257/1177568.png">
                </a>
                <div class="navbar-dropdown">
                    <a class="navbar-item">
                        <a href="sign_in.html">
                            <strong>Sign in</strong>
                        </a>
                    </a>
                    <a class="navbar-item">
                        <a href="sign_up.html">
                            <strong>Sign up</strong>
                        </a>
                    </a>
                </div>
            </div>
            <div class="navbar-item">
            </div>
            <div class="navbar-item">
            </div>
        </div>
    </div>
</nav>
    `
  })
  
  new Vue({
    el: "#navbar",
    // data: {
    //   links: [{
    //       id: 1,
    //       name: "Item 1",
    //       link: "link1"
    //     },
    //     {
    //       id: 2,
    //       name: "Item 2",
    //       link: "link2"
    //     }
    //   ],
    // },
  })