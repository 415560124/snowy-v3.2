/**
 *  Copyright [2022] [https://www.xiaonuo.vip]
 *	Snowy采用APACHE LICENSE 2.0开源协议，您在使用过程中，需要注意以下几点：
 *	1.请不要删除和修改根目录下的LICENSE文件。
 *	2.请不要删除和修改Snowy源码头部的版权声明。
 *	3.本项目代码可免费商业使用，商业使用请保留源码和相关描述文件的项目出处，作者声明等。
 *	4.分发源码时候，请注明软件出处 https://www.xiaonuo.vip
 *	5.不可二次分发开源参与同类竞品，如有想法可联系团队xiaonuobase@qq.com商议合作。
 *	6.若您的项目无法满足以上几点，需要更多功能代码，获取Snowy商业授权许可，请在官网购买授权，地址为 https://www.xiaonuo.vip
 */
/**
 * 图标选择器基础数据
 * 推荐前往https://icones.js.org下载图标的Vue文件，然后放在src/assets/icons文件夹里面
 * 这个网址有118个图标集，包括antd、font awesome、bootstrap、eleme等累计140456个图标
 */
const uiwIconComponentMap = import.meta.glob('../assets/icons/uiw/*.vue') // 异步方式

const uiwIcons = Object.keys(uiwIconComponentMap).map((key) => {
	return key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'))
})

export default {
	icons: [
		{
			name: '基础',
			key: 'default',
			iconItem: [
				{
					name: '线框风格',
					key: 'default',
					item: [
						'step-backward-outlined',
						'step-forward-outlined',
						'fast-backward-outlined',
						'fast-forward-outlined',
						'shrink-outlined',
						'arrows-alt-outlined',
						'down-outlined',
						'up-outlined',
						'left-outlined',
						'right-outlined',
						'caret-up-outlined',
						'caret-down-outlined',
						'caret-left-outlined',
						'caret-right-outlined',
						'up-circle-outlined',
						'down-circle-outlined',
						'left-circle-outlined',
						'right-circle-outlined',
						'double-right-outlined',
						'double-left-outlined',
						'vertical-left-outlined',
						'vertical-right-outlined',
						'vertical-align-top-outlined',
						'vertical-align-middle-outlined',
						'vertical-align-bottom-outlined',
						'forward-outlined',
						'backward-outlined',
						'rollback-outlined',
						'enter-outlined',
						'retweet-outlined',
						'swap-outlined',
						'swap-left-outlined',
						'swap-right-outlined',
						'arrow-up-outlined',
						'arrow-down-outlined',
						'arrow-left-outlined',
						'arrow-right-outlined',
						'play-circle-outlined',
						'up-Square-outlined',
						'down-square-outlined',
						'left-square-outlined',
						'right-square-outlined',
						'login-outlined',
						'logout-outlined',
						'menu-fold-outlined',
						'menu-unfold-outlined',
						'border-bottom-outlined',
						'border-horizontal-outlined',
						'border-inner-outlined',
						'border-outer-outlined',
						'border-left-outlined',
						'border-right-outlined',
						'border-top-outlined',
						'border-verticle-outlined',
						'pic-center-outlined',
						'pic-left-outlined',
						'pic-right-outlined',
						'radius-bottomleft-outlined',
						'radius-bottomright-outlined',
						'radius-upleft-outlined',
						'radius-upright-outlined',
						'fullscreen-outlined',
						'fullscreen-exit-outlined',
						'question-outlined',
						'question-circle-outlined',
						'plus-outlined',
						'plus-circle-outlined',
						'pause-outlined',
						'pause-circle-outlined',
						'minus-outlined',
						'minus-circle-outlined',
						'plus-square-outlined',
						'minus-square-outlined',
						'info-outlined',
						'info-circle-outlined',
						'exclamation-outlined',
						'exclamation-circle-outlined',
						'close-outlined',
						'close-circle-outlined',
						'close-square-outlined',
						'check-outlined',
						'check-circle-outlined',
						'check-square-outlined',
						'clock-circle-outlined',
						'warning-outlined',
						'issues-close-outlined',
						'stop-outlined',
						'edit-outlined',
						'form-outlined',
						'copy-outlined',
						'scissor-outlined',
						'delete-outlined',
						'snippets-outlined',
						'diff-outlined',
						'highlight-outlined',
						'align-center-outlined',
						'align-left-outlined',
						'align-right-outlined',
						'bg-colors-outlined',
						'bold-outlined',
						'italic-outlined',
						'underline-outlined',
						'strikethrough-outlined',
						'redo-outlined',
						'undo-outlined',
						'zoom-in-outlined',
						'zoom-out-outlined',
						'font-colors-outlined',
						'font-size-outlined',
						'line-height-outlined',
						'dash-outlined',
						'small-dash-outlined',
						'sort-ascending-outlined',
						'sort-descending-outlined',
						'drag-outlined',
						'ordered-list-outlined',
						'unordered-list-outlined',
						'radius-setting-outlined',
						'column-width-outlined',
						'column-height-outlined',
						'account-book-outlined',
						'aim-outlined',
						'alert-outlined',
						'apartment-outlined',
						'api-outlined',
						'appstore-add-outlined',
						'appstore-outlined',
						'audio-outlined',
						'audio-muted-outlined',
						'audit-outlined',
						'bank-outlined',
						'barcode-outlined',
						'bars-outlined',
						'bell-outlined',
						'block-outlined',
						'book-outlined',
						'border-outlined',
						'borderless-table-outlined',
						'branches-outlined',
						'bug-outlined',
						'build-outlined',
						'bulb-outlined',
						'calculator-outlined',
						'calendar-outlined',
						'camera-outlined',
						'car-outlined',
						'carry-out-outlined',
						'ci-circle-outlined',
						'ci-outlined',
						'clear-outlined',
						'cloud-download-outlined',
						'cloud-outlined',
						'cloud-server-outlined',
						'cloud-sync-outlined',
						'cloud-upload-outlined',
						'cluster-outlined',
						'code-outlined',
						'coffee-outlined',
						'comment-outlined',
						'compass-outlined',
						'compress-outlined',
						'console-sql-outlined',
						'contacts-outlined',
						'container-outlined',
						'control-outlined',
						'copyright-circle-outlined',
						'copyright-outlined',
						'credit-card-outlined',
						'crown-outlined',
						'customer-service-outlined',
						'dashboard-outlined',
						'database-outlined',
						'delete-column-outlined',
						'delete-row-outlined',
						'delivered-procedure-outlined',
						'deployment-unit-outlined',
						'desktop-outlined',
						'dingtalk-outlined',
						'disconnect-outlined',
						'dislike-outlined',
						'dollar-circle-outlined',
						'dollar-outlined',
						'download-outlined',
						'ellipsis-outlined',
						'environment-outlined',
						'euro-circle-outlined',
						'euro-outlined',
						'exception-outlined',
						'expand-alt-outlined',
						'expand-outlined',
						'experiment-outlined',
						'export-outlined',
						'eye-outlined',
						'eye-invisible-outlined',
						'field-binary-outlined',
						'field-number-outlined',
						'field-string-outlined',
						'field-time-outlined',
						'file-add-outlined',
						'file-done-outlined',
						'file-excel-outlined',
						'file-exclamation-outlined',
						'file-outlined',
						'file-gif-outlined',
						'file-image-outlined',
						'file-jpg-outlined',
						'file-markdown-outlined',
						'file-pdf-outlined',
						'file-ppt-outlined',
						'file-protect-outlined',
						'file-search-outlined',
						'file-sync-outlined',
						'file-text-outlined',
						'file-unknown-outlined',
						'file-word-outlined',
						'file-zip-outlined',
						'filter-outlined',
						'fire-outlined',
						'flag-outlined',
						'folder-add-outlined',
						'folder-outlined',
						'folder-open-outlined',
						'folder-view-outlined',
						'fork-outlined',
						'format-painter-outlined',
						'frown-outlined',
						'function-outlined',
						'fund-projection-screen-outlined',
						'fund-view-outlined',
						'funnel-plot-outlined',
						'gateway-outlined',
						'gif-outlined',
						'gift-outlined',
						'global-outlined',
						'gold-outlined',
						'group-outlined',
						'hdd-outlined',
						'heart-outlined',
						'history-outlined',
						'holder-outlined',
						'home-outlined',
						'hourglass-outlined',
						'idcard-outlined',
						'import-outlined',
						'inbox-outlined',
						'insert-row-above-outlined',
						'insert-row-below-outlined',
						'insert-row-left-outlined',
						'insert-row-right-outlined',
						'insurance-outlined',
						'interaction-outlined',
						'key-outlined',
						'laptop-outlined',
						'layout-outlined',
						'like-outlined',
						'line-outlined',
						'link-outlined',
						'loading3-quarters-outlined',
						'loading-outlined',
						'lock-outlined',
						'mac-command-outlined',
						'mail-outlined',
						'man-outlined',
						'medicine-box-outlined',
						'meh-outlined',
						'menu-outlined',
						'merge-cells-outlined',
						'message-outlined',
						'mobile-outlined',
						'money-collect-outlined',
						'monitor-outlined',
						'more-outlined',
						'node-collapse-outlined',
						'node-expand-outlined',
						'node-index-outlined',
						'notification-outlined',
						'number-outlined',
						'one-to-one-outlined',
						'paper-clip-outlined',
						'partition-outlined',
						'pay-circle-outlined',
						'percentage-outlined',
						'phone-outlined',
						'picture-outlined',
						'play-square-outlined',
						'pound-circle-outlined',
						'pound-outlined',
						'poweroff-outlined',
						'printer-outlined',
						'profile-outlined',
						'project-outlined',
						'property-safety-outlined',
						'pull-request-outlined',
						'pushpin-outlined',
						'qrcode-outlined',
						'read-outlined',
						'reconciliation-outlined',
						'red-envelope-outlined',
						'reload-outlined',
						'rest-outlined',
						'robot-outlined',
						'rocket-outlined',
						'rotate-left-outlined',
						'rotate-right-outlined',
						'safety-certificate-outlined',
						'safety-outlined',
						'save-outlined',
						'scan-outlined',
						'schedule-outlined',
						'search-outlined',
						'security-scan-outlined',
						'select-outlined',
						'send-outlined',
						'setting-outlined',
						'shake-outlined',
						'share-alt-outlined',
						'shop-outlined',
						'shopping-cart-outlined',
						'shopping-outlined',
						'sisternode-outlined',
						'skin-outlined',
						'smile-outlined',
						'solution-outlined',
						'sound-outlined',
						'split-cells-outlined',
						'star-outlined',
						'subnode-outlined',
						'switcher-outlined',
						'sync-outlined',
						'table-outlined',
						'tablet-outlined',
						'tag-outlined',
						'tags-outlined',
						'team-outlined',
						'thunderbolt-outlined',
						'to-top-outlined',
						'tool-outlined',
						'trademark-circle-outlined',
						'trademark-outlined',
						'transaction-outlined',
						'translation-outlined',
						'trophy-outlined',
						'ungroup-outlined',
						'unlock-outlined',
						'upload-outlined',
						'usb-outlined',
						'user-add-outlined',
						'user-delete-outlined',
						'user-outlined',
						'user-switch-outlined',
						'usergroup-add-outlined',
						'usergroup-delete-outlined',
						'verified-outlined',
						'video-camera-add-outlined',
						'video-camera-outlined',
						'wallet-outlined',
						'whats-app-outlined',
						'wifi-outlined',
						'woman-outlined'
					]
				},
				{
					name: '实底风格',
					key: 'filled',
					item: [
						'step-backward-filled',
						'step-forward-filled',
						'fast-backward-filled',
						'fast-forward-filled',
						'caret-up-filled',
						'caret-down-filled',
						'caret-left-filled',
						'caret-right-filled',
						'up-circle-filled',
						'down-circle-filled',
						'left-circle-filled',
						'right-circle-filled',
						'forward-filled',
						'backward-filled',
						'play-circle-filled',
						'up-square-filled',
						'down-square-filled',
						'left-square-filled',
						'right-square-filled',
						'question-circle-filled',
						'plus-circle-filled',
						'pause-circle-filled',
						'minus-circle-filled',
						'plus-square-filled',
						'minus-square-filled',
						'info-circle-filled',
						'exclamation-circle-filled',
						'close-circle-filled',
						'close-square-filled',
						'check-circle-filled',
						'check-square-filled',
						'clock-circle-filled',
						'warning-filled',
						'stop-filled',
						'edit-filled',
						'copy-filled',
						'delete-filled',
						'snippets-filled',
						'diff-filled',
						'highlight-filled',
						'pie-chart-filled',
						'box-plot-filled',
						'fund-filled',
						'sliders-filled',
						'android-filled',
						'apple-filled',
						'windows-filled',
						'chrome-filled',
						'github-filled',
						'aliwangwang-filled',
						'weibo-square-filled',
						'weibo-circle-filled',
						'taobao-circle-filled',
						'html5-filled',
						'wechat-filled',
						'youtube-filled',
						'alipay-circle-filled',
						'skype-filled',
						'gitlab-filled',
						'linkedin-filled',
						'facebook-filled',
						'code-sandbox-circle-filled',
						'codepen-circle-filled',
						'slack-square-filled',
						'behance-square-filled',
						'dribbble-square-filled',
						'instagram-filled',
						'yuque-filled',
						'yahoo-filled',
						'account-book-filled',
						'alert-filled',
						'alipay-square-filled',
						'amazon-circle-filled',
						'amazon-square-filled',
						'api-filled',
						'appstore-filled',
						'audio-filled',
						'bank-filled',
						'behance-circle-filled',
						'bell-filled',
						'book-filled',
						'bug-filled',
						'build-filled',
						'bulb-filled',
						'calculator-filled',
						'calendar-filled',
						'camera-filled',
						'car-filled',
						'carry-out-filled',
						'ci-circle-filled',
						'cloud-filled',
						'code-filled',
						'code-sandbox-square-filled',
						'codepen-square-filled',
						'compass-filled',
						'contacts-filled',
						'container-filled',
						'control-filled',
						'copyright-circle-filled',
						'credit-card-filled',
						'crown-filled',
						'customer-service-filled',
						'dashboard-filled',
						'database-filled',
						'dingtalk-circle-filled',
						'dingtalk-square-filled',
						'dislike-filled',
						'dollar-circle-filled',
						'dribbble-circle-filled',
						'dropbox-circle-filled',
						'dropbox-square-filled',
						'environment-filled',
						'euro-circle-filled',
						'experiment-filled',
						'eye-filled',
						'eye-invisible-filled',
						'file-add-filled',
						'file-excel-filled',
						'file-exclamation-filled',
						'file-filled',
						'file-image-filled',
						'file-markdown-filled',
						'file-pdf-filled',
						'file-ppt-filled',
						'file-text-filled',
						'file-unknown-filled',
						'file-word-filled',
						'file-zip-filled',
						'filter-filled',
						'fire-filled',
						'flag-filled',
						'folder-add-filled',
						'folder-filled',
						'folder-open-filled',
						'format-painter-filled',
						'frown-filled',
						'funnel-plot-filled',
						'gift-filled',
						'gold-filled',
						'golden-filled',
						'google-circle-filled',
						'google-plus-circle-filled',
						'google-plus-square-filled',
						'google-square-filled',
						'hdd-filled',
						'heart-filled',
						'home-filled',
						'hourglass-filled',
						'idcard-filled',
						'ie-circle-filled',
						'ie-square-filled',
						'insurance-filled',
						'interaction-filled',
						'layout-filled',
						'like-filled',
						'lock-filled',
						'mac-command-filled',
						'mail-filled',
						'medicine-box-filled',
						'medium-circle-filled',
						'medium-square-filled',
						'meh-filled',
						'message-filled',
						'mobile-filled',
						'money-collect-filled',
						'notification-filled',
						'pay-circle-filled',
						'phone-filled',
						'picture-filled',
						'play-square-filled',
						'pound-circle-filled',
						'printer-filled',
						'profile-filled',
						'project-filled',
						'property-safety-filled',
						'pushpin-filled',
						'qq-circle-filled',
						'qq-square-filled',
						'read-filled',
						'reconciliation-filled',
						'red-envelope-filled',
						'reddit-circle-filled',
						'reddit-square-filled',
						'rest-filled',
						'robot-filled',
						'rocket-filled',
						'safety-certificate-filled',
						'save-filled',
						'schedule-filled',
						'security-scan-filled',
						'setting-filled',
						'shop-filled',
						'shopping-filled',
						'signal-filled',
						'sketch-circle-filled',
						'sketch-square-filled',
						'skin-filled',
						'slack-circle-filled',
						'smile-filled',
						'sound-filled',
						'star-filled',
						'switcher-filled',
						'tablet-filled',
						'tag-filled',
						'tags-filled',
						'taobao-square-filled',
						'thunderbolt-filled',
						'tool-filled',
						'trademark-circle-filled',
						'trophy-filled',
						'twitter-circle-filled',
						'twitter-square-filled',
						'unlock-filled',
						'usb-filled',
						'video-camera-filled',
						'wallet-filled',
						'zhihu-circle-filled',
						'zhihu-square-filled'
					]
				},
				{
					name: '双色风格',
					key: 'twotone',
					item: [
						'up-circle-two-tone',
						'down-circle-two-tone',
						'left-circle-two-tone',
						'right-circle-two-tone',
						'play-circle-two-tone',
						'up-square-two-tone',
						'down-square-two-tone',
						'left-square-two-tone',
						'right-square-two-tone',
						'question-circle-two-tone',
						'plus-circle-two-tone',
						'pause-circle-two-tone',
						'minus-circle-two-tone',
						'plus-square-two-tone',
						'minus-square-two-tone',
						'info-circle-two-tone',
						'exclamation-circle-two-tone',
						'close-circle-two-tone',
						'close-square-two-tone',
						'check-circle-two-tone',
						'check-square-two-tone',
						'clock-circle-two-tone',
						'warning-two-tone',
						'stop-two-tone',
						'edit-two-tone',
						'copy-two-tone',
						'delete-two-tone',
						'snippets-two-tone',
						'diff-two-tone',
						'highlight-two-tone',
						'pie-chart-two-tone',
						'box-plot-two-tone',
						'fund-two-tone',
						'sliders-two-tone',
						'account-book-two-tone',
						'alert-two-tone',
						'api-two-tone',
						'appstore-two-tone',
						'audio-two-tone',
						'bank-two-tone',
						'bell-two-tone',
						'book-two-tone',
						'bug-two-tone',
						'build-two-tone',
						'bulb-two-tone',
						'calculator-two-tone',
						'calendar-two-tone',
						'camera-two-tone',
						'car-two-tone',
						'carry-out-two-tone',
						'ci-circle-two-tone',
						'ci-two-tone',
						'cloud-two-tone',
						'code-two-tone',
						'compass-two-tone',
						'contacts-two-tone',
						'container-two-tone',
						'control-two-tone',
						'copyright-circle-two-tone',
						'copyright-two-tone',
						'credit-card-two-tone',
						'crown-two-tone',
						'customer-service-two-tone',
						'dashboard-two-tone',
						'database-two-tone',
						'dislike-two-tone',
						'dollar-circle-two-tone',
						'dollar-two-tone',
						'environment-two-tone',
						'euro-circle-two-tone',
						'account-book-two-tone',
						'alert-two-tone',
						'api-two-tone',
						'appstore-two-tone',
						'audio-two-tone',
						'bank-two-tone',
						'bell-two-tone',
						'book-two-tone',
						'bug-two-tone',
						'build-two-tone',
						'bulb-two-tone',
						'calculator-two-tone',
						'calendar-two-tone',
						'camera-two-tone',
						'car-two-tone',
						'carry-out-two-tone',
						'ci-circle-two-tone',
						'ci-two-tone',
						'cloud-two-tone',
						'code-two-tone',
						'compass-two-tone',
						'contacts-two-tone',
						'container-two-tone',
						'control-two-tone',
						'copyright-circle-two-tone',
						'copyright-two-tone',
						'credit-card-two-tone',
						'crown-two-tone',
						'customer-service-two-tone',
						'dashboard-two-tone',
						'database-two-tone',
						'dislike-two-tone',
						'dollar-circle-two-tone',
						'dollar-two-tone',
						'environment-two-tone',
						'euro-circle-two-tone',
						'euro-two-tone',
						'experiment-two-tone',
						'eye-two-tone',
						'eye-invisible-two-tone',
						'file-add-two-tone',
						'file-excel-two-tone',
						'file-exclamation-two-tone',
						'file-two-tone',
						'file-image-two-tone',
						'file-markdown-two-tone',
						'file-pdf-two-tone',
						'file-ppt-two-tone',
						'file-text-two-tone',
						'file-unknown-two-tone',
						'file-word-two-tone',
						'file-zip-two-tone',
						'filter-two-tone',
						'fire-two-tone',
						'flag-two-tone',
						'folder-add-two-tone',
						'folder-two-tone',
						'folder-open-two-tone',
						'frown-two-tone',
						'funnel-plot-two-tone',
						'gift-two-tone',
						'gold-two-tone',
						'hdd-two-tone',
						'heart-two-tone',
						'home-two-tone',
						'hourglass-two-tone',
						'idcard-two-tone',
						'insurance-two-tone',
						'interaction-two-tone',
						'layout-two-tone',
						'like-two-tone',
						'lock-two-tone',
						'mail-two-tone',
						'medicine-box-two-tone',
						'meh-two-tone',
						'message-two-tone',
						'mobile-two-tone',
						'money-collect-two-tone',
						'notification-two-tone',
						'phone-two-tone',
						'picture-two-tone',
						'play-square-two-tone',
						'pound-circle-two-tone',
						'printer-two-tone',
						'profile-two-tone',
						'project-two-tone',
						'property-safety-two-tone',
						'pushpin-two-tone',
						'reconciliation-two-tone',
						'red-envelope-two-tone',
						'rest-two-tone',
						'rocket-two-tone',
						'safety-certificate-two-tone',
						'save-two-tone',
						'schedule-two-tone',
						'security-scan-two-tone',
						'setting-two-tone',
						'shop-two-tone',
						'shopping-two-tone',
						'skin-two-tone',
						'smile-two-tone',
						'sound-two-tone',
						'star-two-tone',
						'switcher-two-tone',
						'tablet-two-tone',
						'tag-two-tone',
						'tags-two-tone',
						'thunderbolt-two-tone',
						'tool-two-tone',
						'trademark-circle-two-tone',
						'trophy-two-tone',
						'unlock-two-tone',
						'usb-two-tone',
						'video-camera-two-tone',
						'wallet-two-tone'
					]
				}
			]
		},
		{
			name: '扩展',
			key: 'extend',
			iconItem: [
				{
					name: '常用',
					key: 'default',
					item: uiwIcons
				},
				{
					name: '其他',
					key: 'other',
					item: ['GiteeIcon']
				}
			]
		}
	]
}
