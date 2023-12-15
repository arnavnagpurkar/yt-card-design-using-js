console.log("script.js initializing")

document.body.style.fontFamily = 'Roboto';
const cont = document.getElementsByClassName('container')[0];

// document.body.style.margin = '0'
// document.body.style.padding = '0'

function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    const card = document.createElement('div');
    card.className = 'card';
    cont.append(card);
    card.style.borderRadius = '7px';

    card.style.position = 'relative';
    card.style.height = '140px';
    card.style.backgroundColor = 'rgb(15, 15, 15)';
    card.style.display = 'flex';
    card.style.marginBottom = '15px';

    const left = document.createElement('div');
    left.className = 'left';
    card.append(left);
    left.style.height = '80%';
    left.style.borderRadius = '5px'
    left.style.margin = 'auto 15px'
    left.style.width = '10%';
    left.style.margin = 'auto 15px'
    left.style.backgroundImage = "url('https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ')";
    left.style.backgroundPosition = 'center center';
    left.style.backgroundSize = 'cover';
    left.style.backgroundRepeat = 'no-repeat';
    left.style.position = 'relative';

    const videoDuration = document.createElement('span');
    videoDuration.className = 'videoDuration';
    videoDuration.innerText = duration;
    left.append(videoDuration)
    videoDuration.style.padding = '2px 5px';
    videoDuration.style.backgroundColor = 'black';
    videoDuration.style.color = 'white';
    videoDuration.style.borderRadius = '5px';
    videoDuration.style.position = 'absolute';
    videoDuration.style.left = '71%'
    videoDuration.style.top = '75%'

    const right = document.createElement('div');
    right.className = 'right';
    card.append(right)

    right.style.display = 'flex';
    right.style.flexDirection = 'column';
    right.style.color = 'white';
    right.style.position = 'relative';
    right.style.top = '12%';

    const hspan = document.createElement('span');
    hspan.className = 'hspan';
    right.append(hspan)
    hspan.innerText = title;
    hspan.style.color = 'white';
    hspan.style.fontSize = '20px'
    hspan.style.fontWeight = '600';

    const videoDetail = document.createElement('div');
    videoDetail.className = 'videoDetail';
    right.append(videoDetail)
    videoDetail.style.position = 'absolute';
    videoDetail.style.top = '22%'


    const video_cName = document.createElement('span');
    video_cName.className = 'video_cName det_span';
    videoDetail.append(video_cName);
    video_cName.innerText = cName;

    let seperator = document.createElement('span');
    seperator.className = 'seperator det_span';
    seperator.innerText = '•';
    videoDetail.append(seperator);

    const video_views = document.createElement('span');
    video_views.className = 'video_views det_span';
    videoDetail.append(video_views);
    let views_str = "";
    const viewsString = String(views);

    if (viewsString.length <= 3) {
        views_str = viewsString; 
    } else if (viewsString.length > 3 && viewsString.length <= 6) {
        views_str = `${viewsString.slice(0, viewsString.length - 3)}K views`;
    } else {
        views_str = `${viewsString.slice(0, viewsString.length - 6)}M views`;
    }

    video_views.innerText = views_str;
    video_views.innerText = views_str;

    seperator = document.createElement('span');
    seperator.className = 'seperator det_span';
    seperator.innerText = '•';
    videoDetail.append(seperator);

    const video_monthsOld = document.createElement('span');
    video_monthsOld.className = 'video_monthsOld det_span';
    videoDetail.append(video_monthsOld);
    video_monthsOld.innerText = `${monthsOld} months old`;

    const det_span = document.getElementsByClassName('det_span');
    Array.from(det_span).forEach((element) => {
        element.style.paddingRight = '5px';
        element.style.color = '#aaa'
    });

}

let title = "Installing VS Code & How Websites Work | Sigma Web Development Course - Tutorial #1";
let cName = "CodeWithHarry";
let views = 555000;
let monthsOld = 5;
let duration = "31:20";
let thumbnail = "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB0alxLSXCSEPITzWr-XXUiv1oglQ";

let runCard = document.getElementById('runfunc');
runCard.addEventListener("click", function() {
    createCard(title, cName, views, monthsOld, duration, thumbnail);
});


console.log('end of script.js')