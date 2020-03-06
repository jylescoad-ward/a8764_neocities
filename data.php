<?php
	Include 'https://dxcdn.net/random_song_picker/song_picker.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <title>a8764</title>
        <link href="css/main.css" rel="stylesheet" type="text/css" />
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    </head>
    <body>
        <table class="container">
            <tr>
                <table class="sidebar">
                    <!-- Title -->
                    <tr class="title">
                        <th>
                            a8764's homepage
                            <!--img src="button1.gif" width="88px"/-->
                        </th>
                    </tr>

                    <tr class="seperator"><td>#</td></tr>

                    <!-- Links -->
                    <tbody class="links">
                        <tr><th class="links">links</th></tr>
                        <!-- <tr><td><a href=""></a></td></tr> -->
                        <tr><td><a href="https://jyles.club?discord">discord</a></td></tr>
                        <tr><td><a href="https://jyles.club?twitter">twitter</a></td></tr>
                        <tr><td><a href="https://jyles.club?twitch">twitch.tv</a></td></tr>
                        <tr><td><a href="https://jyles.club?github">github</a></td></tr>
                    </tbody>

                    <tr class="seperator"><td>#</td></tr>
                    <tr><td>now playing</td></tr>
                    <tr><td><div id="now_playing"><?php echo marqueeGen(randomSongPicker()); ?></div></td></tr>
                    <tr class="seperator"><td>#</td></tr>
                    <tr><td><img src="button1.gif"><div align='center'><a href='https://www.free-website-hit-counter.com'><img src='https://www.free-website-hit-counter.com/c.php?d=9&id=122115&s=1' border='0' title='free website hit counter'></a></div></td></tr>
                </table>
            </tr>
            <tr>
                <table class="main">
                    <tr>
                        <td>
                            <div class="main_container_div">
                                <h1>welcome to my homepage!</h1>
                                <p>
                                    there isn't much here but hopefully there will be more stuff here in the future.<br>
                                    <br>
                                    also just a reminder, this website is quite unknown and only few people know about it and i don't really want attention here because well, its a pretty shit basic website lacking any dynamic stuff, but if you do want that you can go over to my <a href="https://jyles.club">main website</a> which is somewhat has more "functionality."
                                </p>
                                <h3 id="about_me">about me</h3>
                                <p>
                                    currently as of writing this i am 16 (4th march 2020), just started y11 (not telling what school) and im super into programming, music, and playing games. the languages i currently know are (sorted from first langauge learnt to latest langauge learnt);<br>
                                    Bash Scripting (2010), Batch Scripting (2012), HTML(2012), VB.Net (2012), CSS(2012), Javascript(2014?), PHP(2015), Assembly x86 (2017), C++ (2017), C# (2017), Python 3.x (2018), Hopefully many more to come.<br>
                                    <br>
                                    If you want to take a look at some of the projects that I have worked on you can take a look on my <a href="https://jyles.club?github">github</a>.<br>
                                    <br>
                                    I also do some remixes and edits of songs, you can take a look at them on my <a href="https://jyles.club/projects">projects page</a> or my <a href="https://jyles.club?soundcloud">soundcloud</a>.
                                </p>
                                <br>
                                <br>
                                <br>
                                <iframe class="opendir_updates_iframe" src="opendir_updates.html"></iframe>
                                <iframe class="homepage_updates_iframe" src="updates.html"></iframe>
                                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                            </div>
                        </td>
                    </tr>
                </table>
            </tr>
        </table>
    </body>
</html>
