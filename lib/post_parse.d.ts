declare enum enumLinkType {
  IMAGE = 'image',
  LINK = 'link',
  IDLE = 'image',
}

declare class PostParseDefHinter {
  checkAndGetTypesFrom(): {
    errLinkOptType(typeIt: enumLinkType, types: enumLinkType[]): void;
    invalidLastTypesWarn(inputTypes: enumLinkType[], defLinkTypesList: enumLinkType[]): void;
  }

  formatAssetLinkHandler(): {
    noneAstUrlWarn(): void;
    invalidAssetname(assetname: String, sourceDirname: String): void;
  }
}

declare class PostParse {
  static injectHint(extHint: PostParseDefHinter): void; 
}
