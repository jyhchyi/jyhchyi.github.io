﻿	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.BookTemplateName="metro";bookConfig.loadingCaption="Loading";bookConfig.loadingCaptionFontSize="20";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#1F2232";bookConfig.loadingPictureHeight="150";bookConfig.showLoadingGif="Yes";bookConfig.loadingDisplayTime="0";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.appLogoLinkURL="https://www.wghs.tp.edu.tw/nss/p/index";bookConfig.appLogoOpenWindow="Blank";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#000000";bookConfig.iconFontColor="#C6C6C6";bookConfig.toolbarAlwaysShow="No";bookConfig.ToolBarVisible="Yes";bookConfig.formFontColor="#FFFFFF";bookConfig.formBackgroundColor="#333333";bookConfig.ToolBarAlpha="1";bookConfig.CurlingPageCorner="Yes";bookConfig.showBookInstructionOnStart="false";bookConfig.InstructionsButtonVisible="Show";bookConfig.showInstructionOnStart="No";bookConfig.showGotoButtonsAtFirst="No";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.HomeURL="%first page%";bookConfig.aboutButtonVisible="Hide";bookConfig.enablePageBack="Show";bookConfig.ShareButtonVisible="Show";shareObj = [{"name":"Facebook","url":"http://www.facebook.com/sharer.php?u=${url}&t=${title}","logo":"./files/mobile-ext/shares/facebook.png","title":"Facebook"},{"name":"Line","url":"https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fresponse_type%3Dcode%26client_id%3D1446101138%26state%3Deb421f493ed6b67c49a3e84ab28a01%26redirect_uri%3Dhttps%253A%252F%252Fsocial-plugins.line.me%252Flineit%252FloginCallback%253FreturnUrl%253Dhttps%25253A%25252F%25252Fsocial-plugins.line.me%25252Flineit%25252Fshare%25253Furl%25253Dhttps%25253A%25252F%25252Fwww.dgpa.gov.tw%25252Febook%25252Fbook003%25252Findex.html%26scope%3Dopenid%2Bprofile%2Bfriends%2Bgroups%2Btimeline.post%2Bmessage.write&loginChannelId=1446101138&loginState=83LWSrRL1d0db9q9HwSkqa#/","logo":"./files/mobile-ext/shares/line.png","title":"Line"},{"name":"Twitter","url":"http://www.twitter.com/home?status=${url}&t=${title}","logo":"./files/mobile-ext/shares/twitter.png","title":"Twitter"},{"name":"Google","url":"http://www.google.com/bookmarks/mark?op=edit&output=popup&bkmk=${url}&t=${title}","logo":"./files/mobile-ext/shares/google.png","title":"Google"}];bookConfig.addCurrentPage="No";bookConfig.EmailButtonVisible="Show";bookConfig.btnShareWithEmailBody="{link}";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ThumbnailSize="small";bookConfig.BookMarkButtonVisible="Show";bookConfig.TableOfContentButtonVisible="Show";bookConfig.isHideTabelOfContentNodes="yes";bookConfig.SearchButtonVisible="Show";bookConfig.leastSearchChar="3";bookConfig.searchKeywordFontColor="#FFB000";bookConfig.searchHightlightColor="#ffff00";bookConfig.SelectTextButtonVisible="Show";bookConfig.PrintButtonVisible="Show";bookConfig.BackgroundSoundButtonVisible="Show";bookConfig.FlipSound="Yes";bookConfig.BackgroundSoundLoop="-1";bookConfig.bgSoundVol="50";bookConfig.AutoPlayButtonVisible="Show";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.ZoomButtonVisible="Show";bookConfig.maxZoomWidth="1400";bookConfig.defaultZoomWidth="700";bookConfig.mouseWheelFlip="Yes";bookConfig.ZoomMapVisible="Hide";bookConfig.DownloadButtonVisible="Show";bookConfig.enableDownload="Yes";bookConfig.DownloadURL="files/downloads/113.0125 薇閣43期校訊-電子書製作.pdf";var downloadconfig={pdf:{url:'files/downloads/113.0125 薇閣43期校訊-電子書製作.pdf'}};;bookConfig.PhoneButtonVisible="Hide";bookConfig.AnnotationButtonVisible="Show";bookConfig.FullscreenButtonVisible="Show";bookConfig.MagnifierButtonVisible="hide";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backgroundPosition="stretch";bookConfig.backgroundOpacity="100";bookConfig.backgroundScene="None";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.ShowTopLeftShadow="No";bookConfig.pageHighlightType="magazine";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="Yes";bookConfig.cornerRound="8";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Show";bookConfig.phoneFlipShortcutButton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.FlipDirection="0";bookConfig.flippingTime="0.3";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.autoDoublePage="Yes";bookConfig.isTheBookOpen="No";bookConfig.DoubleSinglePageButtonVisible="hide";bookConfig.thicknessWidthType="Thinner";bookConfig.thicknessColor="#ffffff";bookConfig.SingleModeBanFlipToLastPage="No";bookConfig.showThicknessOnMobile="No";bookConfig.isSingleBookFullWindowOnMobile="no";bookConfig.isStopMouseMenu="yes";bookConfig.restorePageVisible="No";bookConfig.topMargin="0";bookConfig.bottomMargin="0";bookConfig.leftMargin="0";bookConfig.rightMargin="0";bookConfig.hideMiniFullscreen="no";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.leftRightPnlShowOption="None";bookConfig.highDefinitionConversion="yes";bookConfig.LargeLogoPosition="top-left";bookConfig.LargeLogoTarget="Blank";bookConfig.isFixLogoSize="No";bookConfig.logoFixWidth="0";bookConfig.logoFixHeight="0";bookConfig.SupportOperatePageZoom="Yes";bookConfig.showHelpContentAtFirst="No";bookConfig.updateURLForPage="No";bookConfig.securitySetting="No Security";bookConfig.passwordTips="Please contact the <a href=\'mailto:author@sample.com\'><u>author</u></a> to access the web";bookConfig.OnlyOpenInIframe="No";bookConfig.OnlyOpenInIframeInfo="No reading rights";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.MidBgColor="#268745";bookConfig.useTheAliCloudChart ="no";bookConfig.totalPageCount=12;bookConfig.largePageWidth=1800;bookConfig.largePageHeight=2631;;bookConfig.securityType="1";bookConfig.CreatedTime ="241103120431";bookConfig.bookTitle="113.0125 薇閣43期校訊-電子書製作";bookConfig.bookmarkCR="d012a9635b60e216c80ee7718cc65cb035e2a584";bookConfig.productName="Flip PDF";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "Chinese(Traditional)",btnFirstPage:"第一頁",btnNextPage:"下一頁",btnLastPage:"最後一頁",btnPrePage:"前一頁",btnDownload:"下載",btnPrint:"列印",btnSearch:"搜尋",btnClearSearch:"清除",frmSearchPrompt:"清除",btnBookMark:"目錄",btnHelp:"幫助",btnHome:"主頁",btnFullScreen:"全屏",btnDisableFullScreen:"普屏",btnSoundOn:"打開聲音",btnSoundOff:"關閉聲音",btnShareEmail:"分享",btnSocialShare:"朋友分享",btnZoomIn:"放大",btnZoomOut:"縮小",btnDragToMove:"拖動/移動",btnAutoFlip:"自動翻頁",btnStopAutoFlip:"停止翻頁",btnGoToHome:"返回主頁",frmHelpCaption:"幫助",frmHelpTip1:"可以雙擊進行放大或縮小",frmHelpTip2:"拖動頁面的個角可以進行翻頁",frmPrintCaption:"打印窗口",frmPrintBtnCaption:"打印",frmPrintPrintAll:"打印所有頁面",frmPrintPrintCurrentPage:"打印當前頁",frmPrintPrintRange:"打印范圍：",frmPrintExampleCaption:"例如：2,5,8-26",frmPrintPreparePage:"正在準備頁：",frmPrintPrintFailed:"打印失敗：",pnlSearchInputInvalid:"（最少需要輸入3個字符）",loginCaption:"登錄",loginInvalidPassword:"你輸入的密碼不正確！",loginPasswordLabel:"密碼：",loginBtnLogin:"登錄",loginBtnCancel:"取消",btnThumb:"縮略圖",lblPages:"頁數：",lblPagesFound:"找到頁數：",lblPageIndex:"頁",btnAbout:"關于",frnAboutCaption:"關于我們",btnSinglePage:"單頁",btnDoublePage:"雙頁",btnSwicthLanguage:"切換語言",tipChangeLanguage:"請在下面選擇一種語言",btnMoreOptionsLeft:"更多選擇",btnMoreOptionsRight:"更多選擇",btnFit:"自動適應",smallModeCaption:"點擊全屏",btnAddAnnotation:"加註釋",btnAnnotation:"註釋列表",FlipPageEditor_SaveAndExit:"保存並退出",FlipPageEditor_Exit:"退出",DrawToolWindow_Redo:"重做",DrawToolWindow_Undo:"還原",DrawToolWindow_Clear:"清除",DrawToolWindow_Brush:"筆刷",DrawToolWindow_Width:"筆刷寬度",DrawToolWindow_Alpha:"筆刷透明度",DrawToolWindow_Color:"筆刷顔色",DrawToolWindow_Eraser:"擦除",DrawToolWindow_Rectangular:"矩形",DrawToolWindow_Ellipse:"橢圓",TStuff_BorderWidth:"邊框寬帶",TStuff_BorderAlph:"邊框透明度",TStuff_BorderColor:"字體顔色",DrawToolWindow_TextNote:"文本附註",AnnotMark:"書籤",lastpagebtnHelp:"最後一頁",firstpagebtnHelp:"第一頁",homebtnHelp:"返回首頁",aboubtnHelp:"關於",screenbtnHelp:"在一個完整的窗口中打開該應用程序",helpbtnHelp:"打開幫助窗口",searchbtnHelp:"從書頁中搜尋",pagesbtnHelp:"預覽小冊子的縮略圖",bookmarkbtnHelp:"打開目錄",AnnotmarkbtnHelp:"打開書籤",printbtnHelp:"打印小冊子",soundbtnHelp:"開啟或關閉的聲音",sharebtnHelp:"發送消息",socialSharebtnHelp:"發送消息",zoominbtnHelp:"放大",downloadbtnHelp:"下載宣傳冊",pagemodlebtnHelp:"單頁和雙頁",languagebtnHelp:"切換語言",annotationbtnHelp:"添加批註",addbookmarkbtnHelp:"自定義書籤",removebookmarkbtnHelp:"移除書籤",updatebookmarkbtnHelp:"更新書籤",btnShoppingCart:"購物車按鈕",Help_ShoppingCartbtn:"購物車",Help_btnNextPage:"下頁",Help_btnPrePage:"上頁",Help_btnAutoFlip:"自動翻頁",Help_StopAutoFlip:"停止自動翻頁",btnaddbookmark:"添加",btndeletebookmark:"刪除",btnupdatebookmark:"更新",frmyourbookmarks:"你的書籤",frmitems:"項目",DownloadFullPublication:"整份出版物",DownloadCurrentPage:"當前頁",DownloadAttachedFiles:"附件",lblLink:"分享鏈結",btnCopy:"復制按鈕",infCopyToClipboard:"瀏覽器不支持剪切板功能",restorePage:"是否從上次的位置開始",tmpl_Backgoundsoundon:"背景音樂開",tmpl_Backgoundsoundoff:"背景音樂關",tmpl_Flipsoundon:"翻頁聲開",tmpl_Flipsoundoff:"翻頁聲關",Help_PageIndex:"當前頁碼",tmpl_PrintPageRanges:"頁範圍",tmpl_PrintPreview:"預覽",btnSelection:"選擇文字",loginNameLabel:"您的名字:",btnGotoPage:"跳至",btnSettings:"設置",soundSettingTitle:"聲音選項",closeFlipSound:"翻頁聲開關",closeBackgroundSound:"背景聲開關",frmShareCaption:"分享",frmShareLinkLabel:"鏈結:",frmShareBtnCopy:"復制",frmShareItemsGroupCaption:"朋友分享",frmPanelTitle:"分享",frmShareQRcode:"QRCode",TAnnoActionPropertyStuff_GotoPage:"轉到頁",btnPageBack:"後退",btnPageForward:"前進",SelectTextCopy:"文本復制",selectCopyButton:"復制",TStuffCart_TypeCart:"購物車",TStuffCart_DetailedQuantity:"數量",TStuffCart_DetailedPrice:"價格",ShappingCart_Close:"關閉",ShappingCart_CheckOut:"付款",ShappingCart_Item:"項目",ShappingCart_Total:"總計",ShappingCart_AddCart:"添加到購物車",ShappingCart_InStock:"有貨",TStuffCart_DetailedCost:"運費",TStuffCart_DetailedTime:"交貨時間",TStuffCart_DetailedDay:"天數(s)",ShappingCart_NotStock:"無貨",btnCrop:"截圖",btnDragButton:"拖動",btnFlipBook:"翻頁書",btnSlideMode:"水平滑動翻頁",btnSinglePageMode:"單頁模式",btnVertical:"上下翻頁瀏覽",btnHotizontal:"左右翻頁瀏覽",btnClose:"關閉",btnDoublePage:"雙頁",btnBookStatus:"視圖",checkBoxInsert:"加入當前網頁",lblLast:"這是最後一頁。",lblFirst:"這是第一頁。",lblFullscreen:"點擊查看全屏",lblName:"名稱",lblPassword:"密碼",lblLogin:"登入",lblCancel:"取消",lblNoName:"用戶名稱不能為空。",lblNoPassword:"密碼不能為空。",lblNoCorrectLogin:"請輸入正確的用戶名和密碼。",btnVideo:"視頻畫廊",btnSlideShow:"幻燈片放映",pnlSearchInputInvalid:"（最少需要輸入3個字符）",btnDragToMove:"拖動/移動",btnPositionToMove:"滑鼠移動",lblHelp1:"拖動頁面角查看",lblHelp2:"按兩下放大，縮小",lblCopy:"複製",lblAddToPage:"添加到頁面",lblPage:"頁",lblTitle:"標題",lblEdit:"編輯",lblDelete:"删除",lblRemoveAll:"删除所有",tltCursor:"光標",tltAddHighlight:"添加高亮",tltAddTexts:"添加文字",tltAddShapes:"添加形狀",tltAddNotes:"添加註釋",tltAddImageFile:"添加影像檔案",tltAddSignature:"添加簽名",tltAddLine:"添加直線",tltAddArrow:"添加箭頭",tltAddRect:"添加矩形",tltAddEllipse:"添加橢圓",lblDoubleClickToZoomIn:"雙擊進行放大。",frmShareCaption:"分享",frmShareLabel:"分享",frmShareInfo:"您可以輕鬆地分享本出版物中對社交網絡。只需點擊下面的相應按鈕。",frminsertLabel:"插入到網站",frminsertInfo:"使用下面的代碼本出版物中嵌入到你的網站。",btnQRCode:"掃描二維碼",btnRotateLeft:"左轉",btnRotateRight:"右轉",lblSelectMode:"請選擇顯示方式",frmDownloadPreview:"預覽",frmDownload:"下載",frmHowToUse:"使用說明",lblHelpPage1:"頁角以及中間可手動翻頁",lblHelpPage2:"雙擊或者用拉大手勢可以放大",lblHelpPage3:"點擊logo 查看更多信息",lblHelpPage4:"點擊工具欄按鈕進行搜尋,分享等",lblHelpPage5:"切換橫屏豎屏",TTActionQuiz_PlayAgain:"重來一次",TTActionQuiz_Ration:"你的評分是",frmTelephone:"電話簿",btnDialing:"撥號",lblSelectMessage:"Please copy the the text content in the text box",btnSelectText:"選擇文字",btnNote:"註釋",btnPhoneNumber:"Telephone",btnWeCharShare:"WeChat 分享",btnMagnifierIn:"Magnifying Glass",btnMagnifierOut:"Magnifier Reduction",frmShareSmallProgram:"smallProgram",btnMagnifier:"Magnifier",frmPrintPrintLimitFailed:"此頁無法列印",infNotSupportHtml5:"HTML5 is not supported by your current web browser, please read the book with latest verson web browser. Here we recommend you to read it with Chrome.",btnReport:"報表",btnDoubleSinglePage:"頁面切換",btnDownloadPosterPrompt:"Click to download the poster",infLongPressToSavePoster:"Press and hold the mobile terminal to save the poster",infLongPressToIndentify:"Long press to identify QR code",infScanCodeToView:"掃碼閱讀",frmaboutcaption:"聯絡",frmaboutDESCRIPTION:"描述",frmaboutAUTHOR:"作者",frmaboutADDRESS:"地址",frmaboutEMAIL:"信箱",frmaboutWEBSITE:"網址",frmaboutMOBILE:"手機",infDeleteNote:"您想刪除該註釋嗎？",proFullScreenWarn:"目前瀏覽器不支援全屏，請使用Chrome以獲得最佳效果",btnBack:"返回",frmVideoListTitle:"影片清單",frmVideoTitle:"影片",lblConfirm:"確認",frmBookMark:"書籤",btnFullscreen:"全屏",btnExitFullscreen:"退出全屏",btnMore:"更多",frmPrintall:"打印所有頁面",frmPrintcurrent:"打印當前頁面",frmPrintRange:"打印頁面範圍",frmPrintexample:"示例: 2,3,5-10",frmPrintbtn:"打印",frmaboutcontactinformation:"聯繫信息",frmSearch:"蒐索",frmToc:"目錄",btnTableOfContent:"目錄",lblDescription:"標題",frmLinkLabel:"鏈接",frmQrcodeCaption:"用手機掃描底部的二維碼。"}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[]]}; bookConfig.isFlipPdf=false; var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{}];	
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}