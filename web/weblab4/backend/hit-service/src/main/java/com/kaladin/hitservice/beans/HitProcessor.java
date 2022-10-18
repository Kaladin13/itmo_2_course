package com.kaladin.hitservice.beans;

import org.springframework.stereotype.Component;

@Component
public class HitProcessor {

    public boolean isHit(Long x, Long y, Long r) {
        return isCircHit(x, y, r) || isRectHit(x, y, r) || isTriHit(x, y, r);
    }

    private boolean isRectHit(Long x, Long y, Long r) {
        return true;
    }

    private boolean isTriHit(Long x, Long y, Long r) {
        return true;
    }

    private boolean isCircHit(Long x, Long y, Long r) {
        return true;
    }
}
