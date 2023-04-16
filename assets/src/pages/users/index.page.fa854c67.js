import{r as p,a as k,F as W,j as m}from"../../../chunks/0e184ced.js";import{S as z,v as D,n as H,a as j,i as M,t as J,j as G,e as X,r as A,d as Y,b as S,u as Z,k as _}from"../../../chunks/10dc5d7a.js";class $ extends z{constructor(e,t){super(),this.client=e,this.options=t,this.trackedProps=new Set,this.selectError=null,this.bindMethods(),this.setOptions(t)}bindMethods(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.length===1&&(this.currentQuery.addObserver(this),L(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}onUnsubscribe(){this.listeners.length||this.destroy()}shouldFetchOnReconnect(){return O(this.currentQuery,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return O(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=[],this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}setOptions(e,t){const s=this.options,i=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),D(s,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=s.queryKey),this.updateQuery();const n=this.hasListeners();n&&B(this.currentQuery,i,this.options,s)&&this.executeFetch(),this.updateResult(t),n&&(this.currentQuery!==i||this.options.enabled!==s.enabled||this.options.staleTime!==s.staleTime)&&this.updateStaleTimeout();const u=this.computeRefetchInterval();n&&(this.currentQuery!==i||this.options.enabled!==s.enabled||u!==this.currentRefetchInterval)&&this.updateRefetchInterval(u)}getOptimisticResult(e){const t=this.client.getQueryCache().build(this.client,e);return this.createResult(t,e)}getCurrentResult(){return this.currentResult}trackResult(e){const t={};return Object.keys(e).forEach(s=>{Object.defineProperty(t,s,{configurable:!1,enumerable:!0,get:()=>(this.trackedProps.add(s),e[s])})}),t}getCurrentQuery(){return this.currentQuery}remove(){this.client.getQueryCache().remove(this.currentQuery)}refetch({refetchPage:e,...t}={}){return this.fetch({...t,meta:{refetchPage:e}})}fetchOptimistic(e){const t=this.client.defaultQueryOptions(e),s=this.client.getQueryCache().build(this.client,t);return s.isFetchingOptimistic=!0,s.fetch().then(()=>this.createResult(s,t))}fetch(e){var t;return this.executeFetch({...e,cancelRefetch:(t=e.cancelRefetch)!=null?t:!0}).then(()=>(this.updateResult(),this.currentResult))}executeFetch(e){this.updateQuery();let t=this.currentQuery.fetch(this.options,e);return e!=null&&e.throwOnError||(t=t.catch(H)),t}updateStaleTimeout(){if(this.clearStaleTimeout(),j||this.currentResult.isStale||!M(this.options.staleTime))return;const t=J(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout(()=>{this.currentResult.isStale||this.updateResult()},t)}computeRefetchInterval(){var e;return typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.currentResult.data,this.currentQuery):(e=this.options.refetchInterval)!=null?e:!1}updateRefetchInterval(e){this.clearRefetchInterval(),this.currentRefetchInterval=e,!(j||this.options.enabled===!1||!M(this.currentRefetchInterval)||this.currentRefetchInterval===0)&&(this.refetchIntervalId=setInterval(()=>{(this.options.refetchIntervalInBackground||G.isFocused())&&this.executeFetch()},this.currentRefetchInterval))}updateTimers(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}clearStaleTimeout(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}clearRefetchInterval(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}createResult(e,t){const s=this.currentQuery,i=this.options,n=this.currentResult,u=this.currentResultState,a=this.currentResultOptions,d=e!==s,f=d?e.state:this.currentQueryInitialState,y=d?this.currentResult:this.previousQueryResult,{state:c}=e;let{dataUpdatedAt:g,error:T,errorUpdatedAt:w,fetchStatus:v,status:h}=c,U=!1,P=!1,l;if(t._optimisticResults){const o=this.hasListeners(),C=!o&&L(e,t),V=o&&B(e,s,t,i);(C||V)&&(v=X(e.options.networkMode)?"fetching":"paused",g||(h="loading")),t._optimisticResults==="isRestoring"&&(v="idle")}if(t.keepPreviousData&&!c.dataUpdatedAt&&y!=null&&y.isSuccess&&h!=="error")l=y.data,g=y.dataUpdatedAt,h=y.status,U=!0;else if(t.select&&typeof c.data<"u")if(n&&c.data===(u==null?void 0:u.data)&&t.select===this.selectFn)l=this.selectResult;else try{this.selectFn=t.select,l=t.select(c.data),l=A(n==null?void 0:n.data,l,t),this.selectResult=l,this.selectError=null}catch(o){this.selectError=o}else l=c.data;if(typeof t.placeholderData<"u"&&typeof l>"u"&&h==="loading"){let o;if(n!=null&&n.isPlaceholderData&&t.placeholderData===(a==null?void 0:a.placeholderData))o=n.data;else if(o=typeof t.placeholderData=="function"?t.placeholderData():t.placeholderData,t.select&&typeof o<"u")try{o=t.select(o),this.selectError=null}catch(C){this.selectError=C}typeof o<"u"&&(h="success",l=A(n==null?void 0:n.data,o,t),P=!0)}this.selectError&&(T=this.selectError,l=this.selectResult,w=Date.now(),h="error");const b=v==="fetching",Q=h==="loading",E=h==="error";return{status:h,fetchStatus:v,isLoading:Q,isSuccess:h==="success",isError:E,isInitialLoading:Q&&b,data:l,dataUpdatedAt:g,error:T,errorUpdatedAt:w,failureCount:c.fetchFailureCount,failureReason:c.fetchFailureReason,errorUpdateCount:c.errorUpdateCount,isFetched:c.dataUpdateCount>0||c.errorUpdateCount>0,isFetchedAfterMount:c.dataUpdateCount>f.dataUpdateCount||c.errorUpdateCount>f.errorUpdateCount,isFetching:b,isRefetching:b&&!Q,isLoadingError:E&&c.dataUpdatedAt===0,isPaused:v==="paused",isPlaceholderData:P,isPreviousData:U,isRefetchError:E&&c.dataUpdatedAt!==0,isStale:F(e,t),refetch:this.refetch,remove:this.remove}}updateResult(e){const t=this.currentResult,s=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,D(s,t))return;this.currentResult=s;const i={cache:!0},n=()=>{if(!t)return!0;const{notifyOnChangeProps:u}=this.options;if(u==="all"||!u&&!this.trackedProps.size)return!0;const a=new Set(u??this.trackedProps);return this.options.useErrorBoundary&&a.add("error"),Object.keys(this.currentResult).some(d=>{const f=d;return this.currentResult[f]!==t[f]&&a.has(f)})};(e==null?void 0:e.listeners)!==!1&&n()&&(i.listeners=!0),this.notify({...i,...e})}updateQuery(){const e=this.client.getQueryCache().build(this.client,this.options);if(e===this.currentQuery)return;const t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(t==null||t.removeObserver(this),e.addObserver(this))}onQueryUpdate(e){const t={};e.type==="success"?t.onSuccess=!e.manual:e.type==="error"&&!Y(e.error)&&(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}notify(e){S.batch(()=>{if(e.onSuccess){var t,s,i,n;(t=(s=this.options).onSuccess)==null||t.call(s,this.currentResult.data),(i=(n=this.options).onSettled)==null||i.call(n,this.currentResult.data,null)}else if(e.onError){var u,a,d,f;(u=(a=this.options).onError)==null||u.call(a,this.currentResult.error),(d=(f=this.options).onSettled)==null||d.call(f,void 0,this.currentResult.error)}e.listeners&&this.listeners.forEach(y=>{y(this.currentResult)}),e.cache&&this.client.getQueryCache().notify({query:this.currentQuery,type:"observerResultsUpdated"})})}}function ee(r,e){return e.enabled!==!1&&!r.state.dataUpdatedAt&&!(r.state.status==="error"&&e.retryOnMount===!1)}function L(r,e){return ee(r,e)||r.state.dataUpdatedAt>0&&O(r,e,e.refetchOnMount)}function O(r,e,t){if(e.enabled!==!1){const s=typeof t=="function"?t(r):t;return s==="always"||s!==!1&&F(r,e)}return!1}function B(r,e,t,s){return t.enabled!==!1&&(r!==e||s.enabled===!1)&&(!t.suspense||r.state.status!=="error")&&F(r,t)}function F(r,e){return r.isStaleByTime(e.staleTime)}var x={},te={get exports(){return x},set exports(r){x=r}},K={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R=p;function re(r,e){return r===e&&(r!==0||1/r===1/e)||r!==r&&e!==e}var se=typeof Object.is=="function"?Object.is:re,ne=R.useState,ie=R.useEffect,ue=R.useLayoutEffect,ce=R.useDebugValue;function ae(r,e){var t=e(),s=ne({inst:{value:t,getSnapshot:e}}),i=s[0].inst,n=s[1];return ue(function(){i.value=t,i.getSnapshot=e,I(i)&&n({inst:i})},[r,t,e]),ie(function(){return I(i)&&n({inst:i}),r(function(){I(i)&&n({inst:i})})},[r]),ce(t),t}function I(r){var e=r.getSnapshot;r=r.value;try{var t=e();return!se(r,t)}catch{return!0}}function oe(r,e){return e()}var le=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?oe:ae;K.useSyncExternalStore=R.useSyncExternalStore!==void 0?R.useSyncExternalStore:le;(function(r){r.exports=K})(te);const he=x.useSyncExternalStore,q=p.createContext(!1),de=()=>p.useContext(q);q.Provider;function fe(){let r=!1;return{clearReset:()=>{r=!1},reset:()=>{r=!0},isReset:()=>r}}const pe=p.createContext(fe()),ye=()=>p.useContext(pe);function Re(r,e){return typeof r=="function"?r(...e):!!r}const ve=(r,e)=>{(r.suspense||r.useErrorBoundary)&&(e.isReset()||(r.retryOnMount=!1))},me=r=>{p.useEffect(()=>{r.clearReset()},[r])},Se=({result:r,errorResetBoundary:e,useErrorBoundary:t,query:s})=>r.isError&&!e.isReset()&&!r.isFetching&&Re(t,[r.error,s]),ge=r=>{r.suspense&&typeof r.staleTime!="number"&&(r.staleTime=1e3)},be=(r,e)=>r.isLoading&&r.isFetching&&!e,Qe=(r,e,t)=>(r==null?void 0:r.suspense)&&be(e,t),Ee=(r,e,t)=>e.fetchOptimistic(r).then(({data:s})=>{r.onSuccess==null||r.onSuccess(s),r.onSettled==null||r.onSettled(s,null)}).catch(s=>{t.clearReset(),r.onError==null||r.onError(s),r.onSettled==null||r.onSettled(void 0,s)});function Ce(r,e){const t=Z({context:r.context}),s=de(),i=ye(),n=t.defaultQueryOptions(r);n._optimisticResults=s?"isRestoring":"optimistic",n.onError&&(n.onError=S.batchCalls(n.onError)),n.onSuccess&&(n.onSuccess=S.batchCalls(n.onSuccess)),n.onSettled&&(n.onSettled=S.batchCalls(n.onSettled)),ge(n),ve(n,i),me(i);const[u]=p.useState(()=>new e(t,n)),a=u.getOptimisticResult(n);if(he(p.useCallback(d=>s?()=>{}:u.subscribe(S.batchCalls(d)),[u,s]),()=>u.getCurrentResult(),()=>u.getCurrentResult()),p.useEffect(()=>{u.setOptions(n,{listeners:!1})},[n,u]),Qe(n,a,s))throw Ee(n,u,i);if(Se({result:a,errorResetBoundary:i,useErrorBoundary:n.useErrorBoundary,query:u.getCurrentQuery()}))throw a.error;return n.notifyOnChangeProps?a:u.trackResult(a)}function Ie(r,e,t){const s=_(r,e,t);return Ce(s,$)}const N=async()=>await(await fetch("https://jsonplaceholder.typicode.com/users")).json(),Te={users:{fn:N}};function we(){const{data:r,isFetching:e,isError:t,error:s,refetch:i}=Ie({queryKey:["users"],queryFn:N});return t?JSON.stringify(s):k(W,{children:[m("h1",{children:"Users"}),k("p",{children:["Example of using ",m("code",{children:"vite-plugin-ssr"}),"."]}),m("button",{onClick:()=>i(),children:"Refetch 🔄️"}),m("ul",{children:r&&r.length>0&&r.map(n=>m("li",{children:n.name},n.id))})]})}export{we as Page,Te as prefetchQueries};
