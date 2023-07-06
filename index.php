<?php
require_once "/opt/lampp/htdocs/libs/projectLib.php";
?>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0 ,maximum-scale=1.0, user-scalable=0">
    <!-- Iphone 모바일 확대 방지  maximum-scale=1.0, user-scalable=0-->
    <title>DIVING BUDDY</title> 
    <script src="https://code.jquery.com/jquery-3.7.0.min.js" integrity="sha256-2Pmvv0kuTBOenSvLm6bvfBSSHrUJ+3A7x6P5Ebd07/g=" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"></script>
    <link rel="stylesheet" href="css/import.css">
    <script src="js/common.js"></script>
    <script src="js/web.js"></script>
</head>
<body>
    <header>
        <h1><img src="images/logo.png" alt="DIVING BUDDY"></h1>
        <button>메뉴 열기</button>
        <nav>
            <ul>
                <li class="active"><a href="">Intro video</a></li>
                <li><a href="">Request invite</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Free Trial Diving Campaign</a></li>
                <li><a href="">APP Downloads</a></li>
            </ul>
        </nav>
    </header>

    <div class="videoArea" data-scroll>
        <video src="video/video.mp4" poster="images/video.png"></video>
        <button class="active">Watch the video</button>
    </div>

    <section class="inviteArea" data-scroll>
        <div>
            <h2>You can never dive alone</h2>
            <p>
                A geosocial networking app that connects divers across the globe 
                and minimizes the initial stages before diving.
            </p>
            <p>
                Coming to iOS and Android.
            </p>
            <button data-popupOpen="popupArea">Request Invite</button>
            <div class="popupArea">
                <div>
                    <div class="leftArea">
                        <img src="images/logo.png" alt="DIVING BUEDDY">
                        <strong>
                            Request an invite
                            <small>Please enter your information</small>
                        </strong>
                        <p>Your personal data will be used to notify you of the release of the Diving Buddy app and to enhance your experience throughout this website.</p>
                    </div>
                    <div class="rightArea">
                        <form id="inviteForm" onsubmit="return false">
                            <fieldset>
                                <ul>
                                    <li>
                                        <strong>Diving Type</strong>
                                        <input type="radio" name="divingType" id="free" checked value="Free Diving">
                                        <label for="free">Free Diving</label>
                                        <input type="radio" name="divingType" id="scuba" value="Scuba Diving">
                                        <label for="scuba">Scuba Diving</label>
                                    </li>
                                    <li>
                                        <strong>Diving Level</strong>
                                        <input type="radio" name="divingLevel" id="instructor" checked value="Instructor">
                                        <label for="instructor">Instructor</label>
                                        <input type="radio" name="divingLevel" id="diver" value="Diver">
                                        <label for="diver">Diver</label>
                                        <input type="radio" name="divingLevel" id="trainee" value="Trainee">
                                        <label for="trainee">Trainee</label>
                                    </li>
                                    <li class="select">
                                        <input type="text" placeholder="Select Conutry" name="country">
                                        <div class="countryList">
                                        </div>
                                    </li>
                                    <li>
                                        <input type="email" placeholder="Enter your Email Address" name="email">
                                    </li>
                                </ul>
                                <input type="submit" value="Send" onclick="api('inviteForm')">
                                <p>Your personal data will be used to notify you of the release of the Diving Buddy app and to enhance your experience throughout this website.</p>
                            </fieldset>
                        </form>
                    </div>
                    <button data-popupClose="popupArea">팝업 닫기</button>
                </div>
            </div>        
        </div>
    </section>

    <div class="featuresArea" data-scroll>
        <section class="stepsArea">
            <h2>As accessible as swimming in just 3 easy steps</h2>
            <p>What is the most difficult thing to start diving?</p>
            <p>Diving Buddy simplifies the complicated initial stages before diving into three easy steps.</p>
            <div>
                <div class="swiper">
                    <ol class="swiper-wrapper">
                        <li class="swiper-slide slider01">
                            <b>Matching</b>
                            <img src="images/features01-img01.png" alt="Matching">
                        </li>
                        <li class="swiper-slide slider02">
                            <b>Chatting</b>
                            <img src="images/features01-img02.png" alt="Chatting">
                        </li>
                        <li class="swiper-slide slider03">
                            <b>Signing</b>
                            <img src="images/features01-img03.png" alt="Signing">
                        </li>
                    </ol>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </section>

        <figure class="profilesArea">
            <img src="images/features02-img01.png" alt="">
            <figcaption>
                <h2>Match a suitable dive buddy based on profiles and feeds</h2>
                <p>
                    Diving buddy analyzes the user's level, location, and preferences and suggests the best matches. 
                </p>
                <p>
                    It also recommends qualified divers with approved diving certificates, enabling trainee divers to match with instructors and divers to match with dive buddies at their preferred level.
                </p>
            </figcaption>
        </figure>

        <section class="chatArea">
            <h2>1:1 and group chat conversations</h2>
            <p>
                1:1 conversations start when users choose to 'Like' each other or by using the 'Super-Like' feature.<br>
                Additionally, a group chat room can be created by inviting buddies from an existing matching list.
            </p>
        </section>

        <section class="signingArea">
            <div>
                <h2>Experience easy signing and payment</h2>
                <p>Diving Buddy users can conveniently sign waiver and release of liability agreements using their smartphones or tablets instead of traditional paper documents.</p>
                <p>Additionally, mobile payments for diving lessons or training courses are also available.</p>
            </div>
            <img src="images/features04-img01.png" alt="">
        </section>

        <section class="freeArea">
            <h2>Free impromptu meeting</h2>
            <p>Enjoy the free impromptu meeting feature that allows users to connect and meet people who share the same interests, hobbies, and passion for diving. 
                <span></span>With this feature, users can easily interact with like-minded individuals and arrange meet-ups to explore exciting activities together.</p>
        </section>
    </div>

    <div class="campaignArea" data-scroll>
        <div>
            <p>Diving Buddy has exciting plans for a free trial diving campaign, aiming to provide an unforgettable experience to 10,000 people in each city worldwide.</p>
            <p>We warmly invite all instructors, divers, and trainees to join us now in this exciting campaign to support you better</p>
            <p>The first city will be announced based on the country with the most participants after the official launch of the app. </p>
            <p>Request an invite now! <a href="javascript:return false;" data-popupOpen="popupArea">Click or tap here</a></p>
        </div>
    </div>

    <section class="appArea" data-scroll>
        <h2 data-mobileScroll>App Download will be available soon</h2>
        <div>
            <a href="">app download</a>
            <a href="">app download</a>
        </div>
        <p>Diving Buddy is a profile and feed-based matching app specifically designed for divers worldwide.</p>
        <p>With just three easy steps on any mobile device before diving, individuals of all ages can easily find a dive buddy, making diving a lot more enjoyable while ensuring safety underwater.</p>
        <p>Explore the underwater world by connecting with divers around the globe through <br class="mobile">Diving Buddy.</p>
    </section>

    <footer>
        <mark>© diving Buddy All Rights Reserved.</mark> Email: hey@divingbuddy.io
    </footer>
</body>
</html>