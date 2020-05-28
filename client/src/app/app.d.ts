declare module 'app/globaldata.service' {
	export class GlobalData {
	}

}
declare module 'app/screen' {
	import { GlobalData } from 'app/globaldata.service';
	import { BaseScreen } from 'smartux-client';
	export class Screen extends BaseScreen {
	    protected global: GlobalData;
	}

}
declare module 'app/menu/menu' {
	import { Screen } from 'app/screen';
	export class MenuComponent extends Screen {
	}

}
declare module 'app/app.screens' {
	/***  Generated file, do not change.  */
	import { MenuComponent } from 'app/menu/menu';
	import { login_PhonePortrait } from 'app/../pages/login/PhonePortrait/login';
	import { home_PhonePortrait } from 'app/../pages/home/PhonePortrait/home';
	import { detailsexpensify1_PhonePortrait } from 'app/../pages/detailsexpensify1/PhonePortrait/detailsexpensify1';
	import { detailsexpensify2_PhonePortrait } from 'app/../pages/detailsexpensify2/PhonePortrait/detailsexpensify2';
	import { detailssalesforceoppor_PhonePortrait } from 'app/../pages/detailssalesforceoppor/PhonePortrait/detailssalesforceoppor';
	import { detailssalesforceaccount_PhonePortrait } from 'app/../pages/detailssalesforceaccount/PhonePortrait/detailssalesforceaccount';
	import { detailssap_PhonePortrait } from 'app/../pages/detailssap/PhonePortrait/detailssap';
	import { detailstimeview_PhonePortrait } from 'app/../pages/detailstimeview/PhonePortrait/detailstimeview';
	import { detailtimecomments_PhonePortrait } from 'app/../pages/detailtimecomments/PhonePortrait/detailtimecomments';
	import { settings_PhonePortrait } from 'app/../pages/settings/PhonePortrait/settings';
	import { loginexpensify_PhonePortrait } from 'app/../pages/loginexpensify/PhonePortrait/loginexpensify';
	import { loginsap_PhonePortrait } from 'app/../pages/loginsap/PhonePortrait/loginsap';
	import { loginsalesforce_PhonePortrait } from 'app/../pages/loginsalesforce/PhonePortrait/loginsalesforce';
	import { loginpeoplesoft_PhonePortrait } from 'app/../pages/loginpeoplesoft/PhonePortrait/loginpeoplesoft';
	import { commentsmodal_PhonePortrait } from 'app/../pages/commentsmodal/PhonePortrait/commentsmodal';
	import { appsettings_PhonePortrait } from 'app/../pages/appsettings/PhonePortrait/appsettings';
	export class Screens {
	    static declarations: typeof MenuComponent[];
	    static mapping: {
	        'login': {
	            PhonePortrait: typeof login_PhonePortrait;
	        };
	        'home': {
	            PhonePortrait: typeof home_PhonePortrait;
	        };
	        'detailsexpensify1': {
	            PhonePortrait: typeof detailsexpensify1_PhonePortrait;
	        };
	        'detailsexpensify2': {
	            PhonePortrait: typeof detailsexpensify2_PhonePortrait;
	        };
	        'detailssalesforceoppor': {
	            PhonePortrait: typeof detailssalesforceoppor_PhonePortrait;
	        };
	        'detailssalesforceaccount': {
	            PhonePortrait: typeof detailssalesforceaccount_PhonePortrait;
	        };
	        'detailssap': {
	            PhonePortrait: typeof detailssap_PhonePortrait;
	        };
	        'detailstimeview': {
	            PhonePortrait: typeof detailstimeview_PhonePortrait;
	        };
	        'detailtimecomments': {
	            PhonePortrait: typeof detailtimecomments_PhonePortrait;
	        };
	        'settings': {
	            PhonePortrait: typeof settings_PhonePortrait;
	        };
	        'loginexpensify': {
	            PhonePortrait: typeof loginexpensify_PhonePortrait;
	        };
	        'loginsap': {
	            PhonePortrait: typeof loginsap_PhonePortrait;
	        };
	        'loginsalesforce': {
	            PhonePortrait: typeof loginsalesforce_PhonePortrait;
	        };
	        'loginpeoplesoft': {
	            PhonePortrait: typeof loginpeoplesoft_PhonePortrait;
	        };
	        'commentsmodal': {
	            PhonePortrait: typeof commentsmodal_PhonePortrait;
	        };
	        'appsettings': {
	            PhonePortrait: typeof appsettings_PhonePortrait;
	        };
	    };
	}

}
declare module 'app/app.hooks' {
	import { AppHooks } from 'smartux-client';
	export class Hooks extends AppHooks {
	    /**
	    * Initial parameters to send to the server.
	    */
	    getServerInitParams(): Promise<any>;
	    /**
	     * Initialize the UI with data from the server.
	     */
	    initializeUI(params: any): void;
	    /**
	     * Override what happens when going to a new screen.
	     */
	    overrideStateHandler(oldScreen: string, newScreen: string, data: any): string;
	    /**
	     * Override what happens when a custom URL scheme is called.
	     *
	     * type - 'event' is currently the only supported type.
	     * name - Name of event, e.g. 'login.submit'
	     * data - JSON object containing URL data.
	     *
	     * Returns: true - Continue with normal flow, e.g. if type is event, send the event to the server.
	     *          false - Don't continue with the normal flow.
	     */
	    interceptCustomURLScheme(type: string, name: string, data: any): Promise<boolean>;
	    /**
	      * Override what happens when there is a push notification.
	      *
	      * data - JSON object containing Notification data
	      *
	      * Returns: true - Continue with normal flow, e.g. if type is event, send the event to the server.
	      *          false - Don't continue with the normal flow.
	      */
	    onPushNotification(data: any): Promise<boolean>;
	    /**
	     * Error when an internal Push Notification error occurs and the cache is aborted.
	     */
	    onPushNotificationError(e: Error): Promise<void>;
	    /**
	     * Override what happens when on a file download event
	     * params - information about the download
	     * url - the url to download the file
	     * Returns: true - Continue with normal flow, e.g. download and try to open with
	     *                   the default application/ social share plugin
	     *          false - Don't continue with the normal flow.
	     */
	    onDownloadFile(params: any, url: any): Promise<boolean>;
	    /**
	     * Override what happens when receive "message" event
	     */
	    onMessage(params: any): Promise<void>;
	    /**
	     * Override what happens when the back button is pressed (Android)
	     * Returns: true - continue with the normal flow, e.g. exit the application
	     *          false - Don't continue with the normal flow.
	     */
	    onBackButton(): boolean;
	    /**
	     * Override what happens when the application enters the background
	     * Returns: true - continue witht the normal flow, e.g disconnect after the time
	     *                  specified in config.ts
	     *          false - don't continue with the normal flow.
	    */
	    onPause(): boolean;
	    /**
	     * Override what happens when the application enters the foreground
	     * Returns: true - continue witht the normal flow, e.g reconnect if disconnected
	     *          false - don't continue with the normal flow.
	    */
	    onResume(): boolean;
	    /**
	     * Override what happens when a request comes in to switch applications
	     * Returns: true - continue with the normal flow, e.g prompt the user
	     *          false - don't prompt the user, ignore the request
	     */
	    onSwitchSessionRequest(): boolean;
	}

}
declare module 'app/app.component' {
	import { Screen } from 'app/screen';
	import { Hooks } from 'app/app.hooks';
	import { TBootstrap } from 'smartux-client';
	export class ClientApp extends Screen {
	    constructor(bootstrap: TBootstrap, hooks: Hooks);
	}

}
declare module 'app/app.module' {
	export class AppModule {
	}

}
