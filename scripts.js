var $tab1 = $('.tab1');
var $tab2 = $('.tab2');
var $tab3 = $('.tab3');
var $tab4 = $('.tab4');
var $menu = $('.nav-bar-header')

$tab1.on('click', toggleActive)
$tab2.on('click', toggleActive)
$tab3.on('click', toggleActive)
$tab4.on('click', toggleActive)
$menu.on('click', toggleMenu)

function toggleActive(event) {
  event.preventDefault();
  const tab = $(this).attr('class').split(' ')[0]
  toggleTab(tab);
  toggleArticle(tab)
}

function toggleTab(tab) {
  const deactivateTab = $('.tab-active')
  deactivateTab.toggleClass('tab-active')
  const activateTab = $(`.${tab}`)
  activateTab.toggleClass('tab-active')
}

function toggleArticle(tab) {
const deactivateArticle = $('.article-visible')
deactivateArticle.toggleClass('article-visible')
const articleNumber = tab.split('')[3]
const activateArticle = $(`.article${articleNumber}`)
activateArticle.toggleClass('article-visible')
}

function toggleMenu(event) {
  event.preventDefault()
  const dropdown = $('.dropdown')
  dropdown.toggleClass('hidden')
}